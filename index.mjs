import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const stdlib = loadStdlib(process.env);

//FRONTEND

(async () => {
  const startingBalance = stdlib.parseCurrency(10);

  const accAlice = await stdlib.newTestAccount(startingBalance);
  const accBob = await stdlib.newTestAccount(startingBalance);

  const formatBalance = (val) => stdlib.formatCurrency(val, 4);
  const getBalance = async (user) =>
    formatBalance(await stdlib.balanceOf(user));

  const beforeAlice = await getBalance(accAlice);
  const beforeBob = await getBalance(accBob);

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
      console.log(`${person} saw outcome - ${OUTCOME[outcome]}`);
    },
  });

  await Promise.all([
    backend.Alice(ctcAlice, {
      //implement Alice's intract Object here
      ...Player("Alice"),
      wager: stdlib.parseCurrency(5),
    }),

    backend.Bob(ctcBob, {
      //implement Bob's intract Object here
      ...Player("Bob"),
      acceptWager: (amount) =>
        console.log(`Bob accepted the wager of ${formatBalance(amount)}`),
    }),
  ]).catch((err) => console.log(err));

  const afterAlice = await getBalance(accAlice);
  const afterBob = await getBalance(accBob);

  console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);
  console.log(`Bob went from ${beforeBob} to ${afterBob}`);
})();
