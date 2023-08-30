#  DBank Project README

Welcome to the Web3 DBank project! This project is a decentralized banking application built on the Internet Computer (ICP) blockchain. It utilizes the Motoko programming language for the backend and React for the frontend. This README will guide you through the project structure, setup, and usage.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Web3 DBank project is a decentralized banking application that demonstrates the capabilities of smart contracts and blockchain technology. It includes a backend implemented in Motoko and a frontend built with React. The project showcases various functionalities such as account top-up, withdrawal, balance checking, and compound interest calculation.

### Backend (Motoko)

The backend of the project is implemented in Motoko, a programming language designed for building applications on the Internet Computer blockchain. The backend includes an actor named `DBank` with the following functionalities:

- `topUp(amount: Float)`: Adds the specified amount to the account balance.
- `withdraw(amount: Float)`: Allows withdrawing funds from the account if the balance is sufficient.
- `checkBalance()`: Retrieves the current account balance asynchronously.
- `compound()`: Applies compound interest to the account balance based on the time elapsed.

### Frontend (React)

The frontend of the project is built using the React framework. It provides a user interface for interacting with the `DBank` smart contract on the Internet Computer blockchain. Users can top up their account, make withdrawals, check their balance, and trigger compound interest calculations through the frontend.

## Prerequisites

Before you begin, ensure you have the following prerequisites:

- Node.js and npm (Node Package Manager) installed on your system.
- Familiarity with React and smart contracts.


Feel free to explore, experiment, and learn from the Web3 DBank project. If you have any questions or need assistance, don't hesitate to reach out to the project maintainers or the community. Happy coding! 🚀
To learn more before you start working with dbank, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/quickstart/hello10mins)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove)
- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/)
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/references/motoko-ref/)
- [JavaScript API Reference](https://erxue-5aaaa-aaaab-qaagq-cai.raw.icp0.io)

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd dbank/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor

## Installation

1. Clone this repository to your local machine:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd web3-dbank-project
```

3. Install the frontend dependencies:

```bash
npm install
```

## Usage

1. Start the frontend development server:

```bash
npm start
```

2. Open your web browser and navigate to the provided URL (usually http://localhost:3000) to access the DBank application.

3. Use the frontend interface to interact with the smart contract. You can top up your account, make withdrawals, check your balance, and trigger compound interest calculations.

## Contributing

Contributions to this project are welcome and encouraged. If you find any issues or would like to add new features, feel free to create pull requests. Be sure to follow the existing coding style and conventions.


---

