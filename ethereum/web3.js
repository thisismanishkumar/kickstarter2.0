import Web3 from 'web3';

let web3;

if(typeof window !='undefined' && typeof window.web3 != 'undefined')
{
    web3 = new Web3(window.web3.currentProvider);
}
else
{
    const provider = new Web3.providers.HttpProvider(
        // 'https://rinkeby.infura.io/v3/fefd36760efb4b1c9e94f04fa3f8e3f0'
        'https://testnet2.matic.network'
    );
    web3 = new Web3(provider);
}

export default web3;