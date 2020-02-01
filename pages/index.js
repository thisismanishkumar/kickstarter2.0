import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button, Icon } from 'semantic-ui-react';
import Layout from '../components/Layouts';
import { Link } from '../routes';

class CampaignIndex extends Component {

    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };

    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description:( 
                <Link route={`/campaigns/${address}`}>
                <a>View Campaign</a>
                </Link>
                ),
                fluid: true,
                raised:true
            };
        });
        return <Card.Group items={items} />
    }
    render() {

        return (
            <Layout>
                <div>
                    <h3>Open Campaign</h3>
                    <Link route="/campaigns/new">
                        <a>
                            <Button primary animated='fade' floated="right">
                                <Button.Content visible>Create Campaign</Button.Content>
                                <Button.Content hidden><Icon name='add' /></Button.Content>
                            </Button>
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;
