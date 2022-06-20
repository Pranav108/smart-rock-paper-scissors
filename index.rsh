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
  });
  const Bob = Participant("Bob", {
    // participantInteractInterface
    ...Player,
  });

  init();

  // Write Logic
  Alice.only(() => {
    const aliceHand = declassify(interact.getHand());
  });
  Alice.publish(aliceHand);
  commit();

  Bob.only(() => {
    const bobHand = declassify(interact.getHand());
  });
  Bob.publish(bobHand);

  const outcome = (4 + aliceHand - bobHand) % 3;
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});
