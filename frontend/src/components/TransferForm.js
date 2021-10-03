import React, { Component }  from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import AccountTable from './AccountTable';

export default class TransferForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            accounts: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8070/account/get/:id')
            .then(res => {
                this.setState({
                    accounts: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.accounts.map((res, i) => {
            return <AccountTable obj={res} key={i} />
        });
    }

render() {
    return (
        <div class="table-wrapper">
            <Table striped border hover>
                <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>Name</th>
                        <th>NIC Number</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {this.DataTable()}
                </tbody>
            </Table>

        </div>
    );
}
}