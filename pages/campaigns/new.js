import React, { Component } from 'react';
import Layout from '../../components/Layouts';
import { Form, Button, Input, Message, Dimmer, Segment, Loader } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from  '../../routes'

class CampaignIndex extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        isLoading: false
    };
    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({ isLoading: true });
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.
                state.minimumContribution).send(
                    {
                        from: accounts[0]
                    }
                );
                Router.pushRoute('/');
        }
        catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ isLoading: false });
    };
    render() {
        return (
            <Layout>
                <Dimmer.Dimmable as={Segment} blurring dimmed={this.state.isLoading}>
                    <Dimmer active={this.state.isLoading}>
                        <Loader>Processing..</Loader>
                    </Dimmer>
                    <h3>Create a Campaign</h3>
                    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                        <Form.Field>
                            <label>Minimum Contribution</label>
                            <Input label='wei' labelPosition='right'
                                placeholder='Enter some wei'
                                value={this.state.minimumContribution}
                                onChange={event =>
                                    this.setState({ minimumContribution: event.target.value })}
                            />
                        </Form.Field>
                        <Message error header=
                            "There are some error while Creating Campaign !!!" content={this.state.errorMessage} />
                        <Button primary disabled={this.state.isLoading}>Create!</Button>
                    </Form>
                </Dimmer.Dimmable>
            </Layout>
        );
    }
}
export default CampaignIndex;