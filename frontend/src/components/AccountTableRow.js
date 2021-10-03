import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default class AccountTableRow extends Component {
    render() {
        console.log(this.props)
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.nic}</td>
                <td>{this.props.obj.balance}</td>

                <td> <Link class="edit-Link" to={`update/${this.props.obj._id}`}>
                    Edit
                </Link>
                    <Button size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        )
    }
}