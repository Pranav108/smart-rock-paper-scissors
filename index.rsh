"reach 0.1";

//BACKEND
const Player = {
  getHand: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    // participantInteractInterface
    ...Player,
    wager: UInt,
  });
  const Bob = Participant("Bob", {
    // participantInteractInterface
    ...Player,
    acceptWager: Fun([UInt], Null),
  });

  init();

  // Write Logic
  Alice.only(() => {
    const wager = declassify(interact.wager);
    const aliceHand = declassify(interact.getHand());
  });
  Alice.publish(wager, aliceHand).pay(wager);
  commit();

  Bob.only(() => {
    interact.acceptWager(wager);
    const bobHand = declassify(interact.getHand());
  });
  Bob.publish(bobHand).pay(wager);

  const outcome = (4 + aliceHand - bobHand) % 3;

  const [forAlice, forBob] =
    outcome == 2 ? [2, 0] : outcome == 0 ? [0, 2] : [1, 1];

  transfer(forAlice * wager).to(Alice);
  transfer(forBob * wager).to(Bob);

  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});
