# Solana Wallet Mock
A Solana wallet adapter chrome extension for automated testing. The extension injects itself to pretend to be a Phantomm, Solflare and Backpack wallet. The wallet mock will instantly return a pubkey When a web page tries to connect to any of these wallets. When a page tries to sign the mock will instantly return a signed transaction.

## Usage
Do NOT use on mainnet! This extension is meant to be used to test on a local network for automated testing. Test your application automatically in github workflows with [puppeteer](https://pptr.dev/) ([Usage example](https://github.com/Virus-Axel/godot-solana-sdk/blob/master/.github/workflows/run_examples.yml)).
