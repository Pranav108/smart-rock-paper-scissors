# Rock-Paper-Scissors Smart Contract

This smart contract implements a secure Rock-Paper-Scissors game using Reach and is ready to be deployed on the main network.

- A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface.
- Smart contracts are digital contracts stored on a blockchain that is automatically executed when predetermined terms and conditions are met

## Specification

- Alice and Bob play the classic rock paper scissors game.
- Alice will first propose a wager of certain amount before the game starts.
- If bob will accept the wager then Alice will turn their first move.
- On Bob's turn, if he doesn't play in a certain period then the game will terminate and both will get back their wager back.
- In bob's turn Alice's hand is unknown to bob.
- After bob will turn their move, the result will be calculated and the winner will get the total wager amount.
- If after bob's turn Alice won't reveal her hand then she will lose(because she has access to bob's hand, so she should play).
- In a draw situation, the wager will be the same and Alice will start the game with her move first.

## Features

- Simple CLI game.
- Implemented Bets and Wagers.
- Preventing Hacks through Automatic Verifications.
- Adding Timeouts and Requiring Participation to Enforce Payout
- Adding User Interaction and a User Interface in my DApp.
- Only works on test-net for now.

## Demo

Here I have created 2 instances of player, in the left terminal left is playing and the right one is for Bob.

<img src="/ScreenShots/Screenshot1.gif" width="100%"/>

## Tech Stacks

- **Reach**
- **Algorand**

## Installation

First, you need to create a proper working environment to run this project. For that, you can find a reference [here](https://developer.algorand.org/docs/get-started/devenv/).
And then for installation follow the guidelines given [here](https://docs.reach.sh/quickstart/). After the complete setup, you can follow the steps given below.

Clone the project

```bash
  git clone https://github.com/Pranav108/smart-rock-paper-scissors
```

Move to the project folder

```bash
  cd smart-rock-paper-scissors
```

Run the program

```
./reach run
```

## ToDo

- Reduce Alice's cost to Run and play the game, because she is responsible for more moves than bob.
- Make it more efficient by optimizing the number of communications.

## Authors

- [@Pranav108](https://github.com/Pranav108)
