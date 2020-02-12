import React, {Component} from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import {Router} from '../routes';

class RequestRow extends Component {

    onApprove = async () =>{
        const accounts = await web3.eth.getAccounts();
        const campaign = Campaign(this.props.address);
        try{
        await campaign.methods.approveRequests(this.props.id-1).send({
            from:accounts[0]
        });
        Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    }catch(err){

    }
    };

    onFinalize = async() => {
        const accounts = await web3.eth.getAccounts();
        const campaign = Campaign(this.props.address);
        try{
        await campaign.methods.finalizeRequest(this.props.id-1).send({
            from:accounts[0]
        });
        Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        }
        catch(err)
        {

        }
    };
    render(){
        const { Row, Cell} = Table;
        const {id,request, approversCount}=this.props;
        const readyToFinalize = request.approvalCount > approversCount/2 ;
        return (
            <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalCount}/{approversCount}</Cell>
                <Cell>
                {
                    request.complete ? null:(
                    <Button color='green' basic onClick={this.onApprove}>Approve</Button>
                )}
                </Cell>
                <Cell>
                {
                    request.complete ? null:(
                        <Button color='teal' basic onClick={this.onFinalize}>
                        Finalize
                    </Button>
                    )
                }
                </Cell>
            </Row>
        );
    }
}
export default RequestRow;