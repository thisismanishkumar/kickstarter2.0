import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface),
'0x062f7D84b3951e2acA95369878ef179597c863c2'
);
    
export default instance;