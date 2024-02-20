# Todo:

- Work on wallet screen using hard-coded data
- Set up a global state management system (contains tokens, balances, private key, etc...).
- Find a way get token balances for the wallet from blockchain. Start of with Sepolia Testnet
- Change wallet screen from hard-coded data to real-time data from blockchain
- Work on send screen (hard code for now with dummy data as a simulation)
- Find a way to interact with the blockchain (send) and implement in Send screen. Hard code seed phrase/private key/ wallet address for now
- Find a way to create seed phrases and private key
- Create screens for Creating seed phrase. Ensure seedphrase is stored locally
- Alter app flow. Upon opening app, check if seed phrase exist, if exist, navigate to Wallet screen. Else, navigate to create wallet screen
- Wallet connect integration and connect screen
- Transaction history screen
- Settings screen
- QR Code for receive
- Receieve screen
- Add account functionality from the seedphrase
- Authentication using finger print / pin to unlock app
- TBC..

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
