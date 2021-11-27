import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { confirm } from "react-confirm-box";
import { useHistory } from 'react-router-dom';

export default class AccountTableRow extends Component {
  render() {
    console.log(this.props)

    const options = {
      labels: {
        confirmable: "Confirm",
        cancellable: "Cancel"
      }
    }
    const onClick = async (_id) => {

      const result = await confirm("Do you wish to close this account?", options);
      if (result) {

        await axios.delete(`http://localhost:8070/account/delete/${_id}`);
        this.render()
        window.location.reload(false);

        console.log(_id);

        return;
      }
    };

    const handleDelete = (id) => {

      console.log(id);
      onClick(id);
    };


    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.nic}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.balance}</td>

        <td> <Link class="edit-Link" className="mr-5" to={`/update/?user=${this.props.obj._id}&account=${this.props.obj.id}&name=${this.props.obj.name}&uNIC=${this.props.obj.nic}&email=${this.props.obj.email}&balance=${this.props.obj.balance}`}>
          <Button size="sm" variant="primary">Edit Details</Button>
        </Link>
          <Button size="sm" variant="danger" onClick={() => handleDelete(this.props.obj._id)}>Close Account</Button>
        </td>
      </tr>

    )
  }
}