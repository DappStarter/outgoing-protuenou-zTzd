require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remind atom hunt photo flock tag'; 
let testAccounts = [
"0x1d1485707c8f8bc214c9b4d8d8f1f19334a0e53be24bc4203619e7b82b1ae19d",
"0xe9deeb7696a5b369ff04e26f6a1acee59d2b17885124e4753aa093c3461144f3",
"0x88f92aaa19c964976cd7a0ae06736220feb6798e312756d71692ed4ad2829ca8",
"0xa88856f358cb13eaf9a9c7e92f4173cc5b7e2b88dad6dea645a8c34103889a21",
"0xb747834160ca9ac3d56e5e1a893195f7a72e32f1d7d50138ebb106cc5338e89f",
"0x772b77751fab9dfc74dd1262b166896dcb4325d768f97357aa48b52e587e3408",
"0xf8fe5397f69e4b52b739d54d954640c2a53496b23535b2b3a837ba0bd10933d7",
"0xc1f2b5cabd5b26839145c30247214d72dc140090e6be5af36c776901962fc4b6",
"0xb08cad954d949d1d9ae709f9b311173081ad3e9ce34a1e1ec7662fa4625fb217",
"0x4aee4954b54d74220df08ead8f21268974cac8be40096d5721cc13bfb21af2de"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


