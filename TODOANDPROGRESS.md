# Todo:

- Find a way get token balances for the wallet from blockchain. Start of with Sepolia Testnet; either:
  - Use moralis API: https://docs.moralis.io/web3-data-api/evm/reference/wallet-api/get-token-balances-by-wallet?address=0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326&chain=sepolia&token_addresses=[]
- Change wallet screen from hard-coded data to real-time data from blockchain
- Work on send screen (hard code for now with dummy data as a simulation)
- Find a way to interact with the blockchain (send) and implement in Send screen. Hard code seed phrase/private key/ wallet address for now:
  - Input the private public key in env values
  - Use web3.js. Create a web3js an initialise it with the endpoint upon init. Then we can use the web3js anywhere in the project
- Find a way to create seed phrases and private key https://docs.web3js.org/guides/getting_started/quickstart#setting-up-a-wallet
- Create screens for Creating seed phrase. Ensure seedphrase is stored locally
- Alter app flow. Upon opening app, check if seed phrase exist, if exist, navigate to Wallet screen. Else, navigate to create wallet screen
- Wallet connect integration and connect screen
- Transaction history screen
- Settings screen
- QR Code for receive
- Receieve screen
- Add account functionality from the seedphrase / ability to add from a private key https://docs.web3js.org/guides/getting_started/quickstart#setting-up-a-wallet
- Authentication using finger print / pin to unlock app
- TBC..

# Bugs Log

# Future Tasks (no particular order, non-exhaustive):

- TBC...

# Done:

- 16/11/23: Initialise project with first commit and planning
- 16/01/24: Create Navigation Structure
- 16/01/24: Create navigation bar at the bottom with 5 icons: Wallet, History, Transact, Connect, Settings
- 16/01/24: Create structure for the screens and ensure navigation works; Wallet, History and Settings is a screen itself. Transact and connect will be a bottom popup
- 16/01/24: Handle it as a drawer that pops up. That, to see if drawer is open, put variable in global state (useContext)
- 16/01/24: Create structure for Transact pages: Swap (Screen), Send (Screen), Receive (bottom popup)
- 20/02/24: set up alias imports
- 22/02/24: Layout for wallet screen using hard code data
- 22/02/24: Introduce drop down select component
- 06/03/24: Refactor bottom drawer context
- Introduce styled components
- Refactor from redux to services
- Change npm to yarn
- Added env values
