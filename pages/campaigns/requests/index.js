import React, { Component } from 'react';
import Layout from '../../../components/Layouts';
import { Link } from '../../../routes';
import { Button, Table } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';


class RequestIndex extends Component {
    static async getInitialProps(props) {

        const { address } = props.query;
        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
        const requests = await Promise.all(
            Array(parseInt(requestCount))
                .fill()
                .map((element, index) => {
                    return campaign.methods.requests(index).call();
                })
        );
        const approversCount = await campaign.methods.approversCount().call();
        console.log(requests);
        return { address, requests, requestCount, approversCount };
    }

    renderRow() {
        return this.props.requests.map((request, index) => {
            return (<RequestRow
                approversCount={this.props.approversCount}
                key={index}
                id={index + 1}
                request={request}
                address={this.props.address}
            />
            );
        });
    }


    render() {
        const { Header, Row, HeaderCell, Body } = Table;
        return (
            <Layout>
                <h3>Pending Requests</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary floated="right" style={{marginBottom :10 }}>Add Requests</Button>
                    </a>
                </Link>

                <Table celled>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRow()}
                    </Body>
                </Table>
                <div>Found {this.props.requestCount} requests</div>
            </Layout>
        );
    }
}
export default RequestIndex;