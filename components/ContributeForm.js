import React, { Component } from 'react';
import { Button, Form, Input, Message, Dimmer, Segment, Loader, Container } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
    state = {
        value: '',
        errorMessage: '',
        isLoading: false,
        success: false
    };
    onSubmit = async (event) => {
        this.setState({
            success: false,
            errorMessage: ''
        });
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        this.setState({ isLoading: true });
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            Router.pushRoute(`/campaigns/${this.props.address}`);
            this.setState({ success: true });

        }
        catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ isLoading: false });
    };
    render() {
        return (
            <Container>
                <h3>Plz!! Donate to this campaign</h3>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <Dimmer.Dimmable as={Segment} blurring dimmed={this.state.isLoading}>
                    <Dimmer active={this.state.isLoading}>
                        <Loader>Processing..</Loader>
                    </Dimmer>
                    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={this.state.success}>
                        <Form.Field>
                            <label>To Contribute </label>
                            <Input
                                value={this.state.value}
                                onChange={event => this.setState({ value: event.target.value })}
                                label='ether'
                                labelPosition='right'
                                placeholder='Enter some ether'
                            />
                        </Form.Field>
                        <Message success header='Your transaction is successful'
                            content='You had helped a needy guy.' />
                        <Message error header=
                            "There are some error while donating to campaign !!!" content={this.state.errorMessage} />
                        <Button primary>Donate</Button>
                    </Form>
                </Dimmer.Dimmable>
            </Container>
        );
    }
}

export default ContributeForm;