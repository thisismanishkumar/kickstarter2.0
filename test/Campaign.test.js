const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const  web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from:accounts[0], gas:'1000000'});

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });
    //const campaigns = await factory....
    //campaignAddress = campaigns
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    campaign = await new web3.eth.Contract( 
        JSON.parse(compiledCampaign.interface),
        campaignAddress
        );
    
});
    describe('Campaign',()=>{
        it('deploy a factory and a campaign', () => {
            assert.ok(factory.options.address);
            assert.ok(campaign.options.address);
        });

        it('marks caller as the campaign manager',async()=>{
            const manager = await campaign.methods.manager().call();
            assert.equal(accounts[0], manager);
        });

        it('allows people to contribute money and marks them approver' ,async ()=>{
            await campaign.methods.contribute().send({
                value: '200',
                from: accounts[1]
            });
            const isContributor = await campaign.methods.approvers(accounts[1]).call();
            assert(isContributor);
        });
        it('minimum contribution required',async () => {
            try{
                await campaign.methods.contribute.send({
                    value:'5',
                    from:accounts[1]
                });
                assert(false);
            }
            catch(err)
            {
                assert(true);
            }
        });

        it('allows manager to make a requests ', async ()=>{
            await campaign.methods.createRequest('Buying arduino uno pro','1000',accounts[2]).send({
                from:accounts[0],
                gas:'1000000'
            });
            const request = await campaign.methods.requests(0).call();
            assert.equal(request.description,'Buying arduino uno pro');
        });
        
    });