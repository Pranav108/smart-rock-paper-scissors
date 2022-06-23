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
    const _aliceHand = interact.getHand();
    const [_commitAlice, _saltValue] = makeCommitment(interact, _aliceHand);
    const commitAlice = declassify(_commitAlice);
  });
  Alice.publish(wager, commitAlice, deadline).pay(wager);

  commit();

  unknowable(Bob, Alice(_aliceHand, _saltValue));

  Bob.only(() => {
    interact.acceptWager(wager);
    const bobHand = declassify(interact.getHand());
  });
  Bob.publish(bobHand)
    .pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
  commit();

  Alice.only(() => {
    const saltAlice = declassify(_saltValue);
    const aliceHand = declassify(_aliceHand);
  });
  Alice.publish(saltAlice, aliceHand).timeout(relativeTime(deadline), () =>
    closeTo(Bob, informTimeout)
  );

  checkCommitment(commitAlice, saltAlice, aliceHand);
  const outcome = winner(aliceHand, bobHand);

  const [forAlice, forBob] =
    outcome == 2 ? [2, 0] : outcome == 0 ? [0, 2] : [1, 1];

  transfer(forAlice * wager).to(Alice);
  transfer(forBob * wager).to(Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});
