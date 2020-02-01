import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
'0x5E07d8d042d61d5100762bcC079eeFf42F4F1622'
);
    
export default instance;