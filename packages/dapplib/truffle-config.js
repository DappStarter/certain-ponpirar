require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth script universe idea entire obscure tomorrow'; 
let testAccounts = [
"0xe50ac22a964967102203953cd607230e9b7b858ffcb5a6673b8ae2971c10587e",
"0x6cdd7295e49f12002a275f58325da39b8a5174eab9cc66a72bf4f2f48a0569cb",
"0xbc115bbf8dd9879784b07ad17de5eb8fb0098ce6029f4d28d1995b99e3ce7738",
"0x2e2139de50095602d7dce62bbd2f867c71abbcc89c0554115eba3ba971347809",
"0xb57fc1c446a781a6352efd7350b249eed4c2c476c5e0ec1abcfe39eff2155329",
"0xb32402674e6bfd9e567c0d70ca8eacaaa22684d3368a2b7167fd1a25f4337f64",
"0x82305ee36be92ce125e3079719709f9a56312d63d0104c0d9394eb8fb8ff1a2c",
"0x62dfd7403d6c79df0e5a6908077bcc43ceb71b805aeaecb79806ed0605f14c74",
"0xfec10c78a26832e933a6374bbaeec22a63699b00a8f9049a00299b5fb02eefa1",
"0x29b0bc218ea98581dc2e772c9b7957369ee63996c9ba99cd70dd1e459ef74462"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
