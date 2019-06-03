# Evironment setting
npm i sdagraph

npm install secp256k1

Refer to the account documentation to test the package requirements.

# Transaction JSON parameter specification

- "To" : Enter the address of the destination.

- "PrivateKey" : Enter the sender's private key.

- "Balance" : Enter a number that is lower than the account balance in the sender's address.

- "Nonce" : Enter the nonce number of the account in the sender's address.

- "Gas" : Enter the number of transaction fees in the blockchain.

- "Type" : <p>1. "a64" : Stands for general transaction.<br/>
           2. "a65" : Stands for contract of creation.<br/>
           3. "a66" : Stands for contract of execution.</p>

- "Input" : The bytecode of the smart contract, without the prefix "0x".

See the transaction documentation to retrieve the results in a json string.

------------------------------------------------------------------------------------------------------------------
The sDAG package does not support broadcasts and is currently only broadcast via the API.

If you want to create a contract by API signing. The rules for the input fields are the same as for sDAG.
