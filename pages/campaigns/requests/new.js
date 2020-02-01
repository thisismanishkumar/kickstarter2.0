import React,{Component} from 'react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import {Link, Router} from '../../../routes';
import Layout from '../../../components/Layouts';
import { Button, Form, Input, Message, Dimmer, Segment, Loader, Container } from 'semantic-ui-react';

class RequestsNew extends Component {

    state={
        value:'',
        description:'',
        recipient:'',
        errorMessage: '',
        isLoading: false,
        success: false
    };
    static async getInitialProps(props){
        const {address} = props.query;
        return {address};
    }
    onSubmit = async event => {
        this.setState({
            success: false,
            errorMessage: ''
        });
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        const {
            description, value, recipient
        } = this.state;
        this.setState({ isLoading: true });
        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(description,
                web3.utils.toWei(value,'ether'),
                recipient)
                .send({
                    from :accounts[0]
                });
                this.setState({ success: true });
        }
        catch(err)
        {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ isLoading: false });
    };
    render(){
        return(
            <Layout>
            <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>Back</a>
            </Link>
            <h3>Create a Request</h3>
            <Dimmer.Dimmable as={Segment} blurring dimmed={this.state.isLoading}>
                    <Dimmer active={this.state.isLoading}>
                        <Loader>Processing..</Loader>
                    </Dimmer>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={this.state.success} >
                    <Form.Field>
                        <label>Description</label>
                        <Input 
                            value={this.state.description}
                            onChange={ event => this.setState({description:event.target.value})}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Value in Ether</label>
                        <Input 
                            value={this.state.value}
                            onChange={ event => this.setState({value:event.target.value})}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Recipient</label>
                        <Input 
                            value={this.state.recipient}
                            onChange={ event => this.setState({recipient:event.target.value})}
                        />
                    </Form.Field>
                    <Message success header='Your transaction is successful'
                            content='You had successfully created a requests' />
                        <Message error header=
                            "There are some error while Creating Requests !!!" content={this.state.errorMessage} />
                    <Button primary >Create!</Button>
                </Form>
                </Dimmer.Dimmable>
            </Layout>
        );
    }
}

export default RequestsNew;