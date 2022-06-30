"reach 0.1";

//BACKEND

const [isHand, ROCK, PAPER, SCISSORS] = makeEnum(3);
const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

const winner = (handA, handB) => (4 + handA - handB) % 3;

assert(winner(ROCK, PAPER) == B_WINS);
assert(winner(PAPER, ROCK) == A_WINS);
assert(winner(SCISSORS, SCISSORS) == DRAW);

forall(UInt, (handA) =>
  forall(UInt, (handB) => assert(isOutcome(winner(handA, handB))))
);

forall(UInt, (hand) => assert(winner(hand, hand) == DRAW));

const Player = {
  ...hasRandom,
  getHand: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    ...Player,
    wager: UInt,
    deadline: UInt,
  });
  const Bob = Participant("Bob", {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });

  const informTimeout = () => {
    each([Alice, Bob], () => interact.informTimeout());
  };

  init();

  Alice.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(wager, deadline).pay(wager);

  commit();

  Bob.only(() => {
    interact.acceptWager(wager);
  });
  Bob.pay(wager).timeout(relativeTime(deadline), () =>
    closeTo(Alice, informTimeout)
  );

  var outcome = DRAW;
  invariant(balance() == 2 * wager && isOutcome(outcome));
  while (outcome == DRAW) {
    commit();
    Alice.only(() => {
      const _aliceHand = interact.getHand();
      const [_commitAlice, _saltValue] = makeCommitment(interact, _aliceHand);
      const commitAlice = declassify(_commitAlice);
    });
    Alice.publish(commitAlice).timeout(relativeTime(deadline), () =>
      closeTo(Bob, informTimeout)
    );

    commit();
    unknowable(Bob, Alice(_aliceHand, _saltValue));

    Bob.only(() => {
      const bobHand = declassify(interact.getHand());
    });
    Bob.publish(bobHand).timeout(relativeTime(deadline), () =>
      closeTo(Alice, informTimeout)
    );
    commit();

    Alice.only(() => {
      const saltAlice = declassify(_saltValue);
      const aliceHand = declassify(_aliceHand);
    });
    Alice.publish(saltAlice, aliceHand).timeout(relativeTime(deadline), () =>
      closeTo(Bob, informTimeout)
    );

    checkCommitment(commitAlice, saltAlice, aliceHand);

    outcome = winner(aliceHand, bobHand);
    continue;
  }
  assert(outcome == A_WINS || outcome == B_WINS);
  transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});
