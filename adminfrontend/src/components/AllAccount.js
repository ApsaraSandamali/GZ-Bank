import React, { Component } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import AccountTableRow from './AccountTableRow';

export default class AllAccount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Accounts: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8070/account/')
            .then(res => {
                this.setState({
                    Accounts: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.Accounts.map((res, i) => {
            return <AccountTableRow obj={res} key={i} />
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
                            <th>Email</th>
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