const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
    "nurse oven cream donor desert they stamp that heart layer medal jealous",
    // "https://rinkeby.infura.io/v3/fefd36760efb4b1c9e94f04fa3f8e3f0"
    "https://testnetv3.matic.network"
);
const web3 = new Web3(provider);

const deploy = async () => {
    console.log("hello");
    const accounts = await web3.eth.getAccounts();
    console.log("Attemptng to deploy a contract", accounts[0]);

    const result = await new web3.eth.Contract(
        JSON.parse(compiledFactory.interface)
    )
        .deploy({
            data: compiledFactory.bytecode
        })
        .send({ gas: "1000000", from: accounts[0] });
    // console.log(interface);
    console.log("Contracts deployed to", result.options.address);
};
deploy();
// old eth  0x5C95Cd3656196b82C861402c505B1DDB849FDAd7
//  new eth 0x76E4990eA2a0Ee8C1E340B2E1392EaACC9b7bf26
// Matic   0x5E07d8d042d61d5100762bcC079eeFf42F4F1622
// Matic1 0x062f7D84b3951e2acA95369878ef179597c863c2