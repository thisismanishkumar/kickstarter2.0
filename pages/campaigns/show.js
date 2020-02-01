import React,{Component} from 'react';
import Layout from '../../components/Layouts';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import  web3 from '../../ethereum/web3';
import Contribute from '../../components/ContributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        console.log(summary);
        return {
            address:props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }
    renderCards(){
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;
        const items =[
            {
                header: manager,
                meta: 'Address of manager',
                description:'Manager Created this Campaign and can only create requests',
                style : { overflowWrap : 'break-word'},
                raised: true
            },
            {
                header:minimumContribution,
                meta : 'Minimum Contribution (wei)',
                description: 'You must contribute this much money to become an approver for requests.',
                raised: true
            },
            {
                header : requestsCount,
                meta : 'Number of requests',
                description: 'A requests tries to withdraw money from campaign. Request must be from manager',
                raised : true
            },
            {
                header : approversCount,
                meta : 'Number of Approvers',
                raised : true,
                description : 'Number of people who have already donated to Campaign'
            },
            {
                header: web3.utils.fromWei(balance,'ether'),
                meta: 'Campaign balance (Ether)',
                raised : true,
                description : 'Balance left in the Campaign to use.'
            }
        ];
        return <Card.Group items = {items} />;
    }
    render(){
        return (
            <Layout>
        <h3>Campaign Show</h3>
        <Grid>
            <Grid.Column width={10}>
                {this.renderCards()}
                <br />
                <Link route = {`/campaigns/${this.props.address}/requests`}>
                    <a>
                        <Button primary>View Requests</Button>
                    </a>
                </Link>
            </Grid.Column>
            <Grid.Column width={6}>
                < Contribute address={this.props.address} />
            </Grid.Column>
        </Grid>
        </Layout>
        );
    }

}
export default CampaignShow;