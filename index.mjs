import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
import { ask, yesno, done } from "@reach-sh/stdlib/ask.mjs";
const stdlib = loadStdlib(process.env);

//FRONTEND

(async () => {
  const isAlice = await ask("Are you Alice?", yesno);

  const firstPlayer = isAlice ? "Alice" : "Bob";
  console.log(`Starting Rock,paper,Scissors! as ${firstPlayer}`);

  const createAccount = await ask(
    "Would you like to create an Account(Only possible on devnet)",
    yesno
  );
  let accPlayer = null;
  if (createAccount) {
    accPlayer = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
  } else {
    const secret = await ask("What is your account secret then?", (x) => x);
    accPlayer = await stdlib.newAccountFromSecret(secret);
  }

  let ctc = null;
  const deployCTC = await ask(
    "Would you like to deploy the contract?(y/n)",
    yesno
  );
  if (deployCTC) {
    ctc = accPlayer.contract(backend);
    ctc
      .getInfo()
      .then((info) =>
        console.log(`The contract is deployed as : ${parseInt(info._hex, 16)}`)
      );
  } else {
    const info = await ask(
      "Please paste the contract information:",
      JSON.parse
    );
    ctc = accPlayer.contract(backend, info);
  }

  const formatBalance = (val) => stdlib.formatCurrency(val, 4);
  const getBalance = async () =>
    formatBalance(await stdlib.balanceOf(accPlayer));

  const initialBalance = await getBalance();
  console.log(`Your balance is ${initialBalance}`);

  const interact = { ...stdlib.hasRandom };
  interact.informTimeout = () => {
    console.log(`There was a timeout`);
    process.exit(1);
  };
  if (isAlice) {
    const amount = await ask(
      "How much do you want to wager?",
      stdlib.parseCurrency
    );
    interact.wager = amount;
    interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
  } else {
    interact.acceptWager = async (amount) => {
      const accepted = await ask(
        `Do you accept the wager of ${formatBalance(amount)}`,
        yesno
      );
      if (!accepted) process.exit(0);
    };
  }
  const handsAvailable = ["Rock", "Paper", "Scissors"];
  const providedhand = { R: 1, P: 2, S: 3 };
  interact.getHand = async () => {
    const choosenHand = await ask(`What hand will you Play?`, (choice) => {
      const playedHand = providedhand[choice[0].toUpperCase()];
      if (!playedHand) throw Error(`Not a valid hand choice`);
      return playedHand - 1;
    });
    console.log(`You Played ${handsAvailable[choosenHand]}`);
    return choosenHand;
  };

  const possibleOutcome = ["Bob wins", "Draw", "Alice wins"];
  interact.seeOutcome = async (outcome) =>
    console.log(`The outcome is ${possibleOutcome[outcome]}`);

  const part = isAlice ? backend.Alice : backend.Bob;
  await part(ctc, interact);

  const finalBalance = await getBalance();
  console.log(`Your balance is now : ${finalBalance}`);
  done();
})();
