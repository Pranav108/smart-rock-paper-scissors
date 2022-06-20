import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const stdlib = loadStdlib(process.env);

//FRONTEND

(async () => {
  const startingBalance = stdlib.parseCurrency(10);

  const accAlice = await stdlib.newTestAccount(startingBalance);
  const accBob = await stdlib.newTestAccount(startingBalance);

  const ctcAlice = accAlice.contract(backend);
  const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

  const HAND = ["Rock", "Paper", "Scissors"];
  const OUTCOME = ["Bob wins", "Draw", "Alice wins"];

  const Player = (person) => ({
    getHand: () => {
      const hand = Math.floor(Math.random() * 3);
      console.log(`${person} played ${HAND[hand]}`);
      return hand;
    },
    seeOutcome: (outcome) => {
      console.log(`${person} saw outcome ${OUTCOME[outcome]}`);
    },
  });

  await Promise.all([
    backend.Alice(ctcAlice, {
      //implement Alice's intract Object here
      ...Player("Alice"),
    }),

    backend.Bob(ctcBob, {
      //implement Bob's intract Object here
      ...Player("Bob"),
    }),
  ]).catch((err) => console.log(err));
})();
