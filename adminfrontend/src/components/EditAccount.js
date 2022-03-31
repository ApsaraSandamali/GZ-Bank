import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./EditAccount.css";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { confirm } from "react-confirm-box";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function EditAccount() {

  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get('user');
  const uaccount = queryParams.get('account');
  const uname = queryParams.get('name');
  const uNIC = queryParams.get('uNIC');
  const uEmail = queryParams.get('email');
  const ubalance = queryParams.get('balance');
  const redirect = useHistory();

  const [newName, setName] = useState(uname);

  const setNewName = (uname) => {
    setName(uname);
  };
  const [newNIC, setNIC] = useState(uNIC);

  const setNewNIC = (uNIC) => {
    setNIC(uNIC);
  };
  const [newEmail, setEmail] = useState(uEmail);

  const setNewEmail = (uEmail) => {
    setEmail(uEmail);
  }


  const options = {
    labels: {
      confirmable: "Update",
      cancellable: "Cancel"
    }
  }

  const accountUpdate = async (userId) => {
    const result = await confirm("Do you want to update this?", options);
    if (result) {

      await axios.put(`http://localhost:8070/account/update/${userId}`, {
        "id": uaccount,
        "name": newName,
        "nic": newNIC,
        "email": newEmail,
        "balance": ubalance
      });
      redirect.push(`/allaccounts/`);

      return;

    }
    console.log("You click No!");
  };


  return (
    <Box className="backgrounimg"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0.5, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <div>
        <TextField
          disabled
          id="filled-required"
          label="Required"
          defaultValue={uaccount}
          helperText="Account Number"
          variant="filled"
        /> <br />
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue={uname}
          onInput={e => setNewName(e.target.value)}
          helperText="Name"
          variant="filled"
        /> <br />
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue={uNIC}
          onInput={e => setNewNIC(e.target.value)}
          helperText="NIC Number"
          variant="filled"
        /> <br />
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue={uEmail}
          onInput={e => setNewEmail(e.target.value)}
          helperText="Email"
          variant="filled"
        /> <br />
        <TextField
          disabled
          id="filled-required"
          label="Required"
          defaultValue={ubalance}
          helperText="Balance"
          variant="filled"
        /> <br />
        <Button className="mr-5" size="sm" variant="primary" onClick={() => accountUpdate(userId)}>Update</Button>

        <Link to={`/allaccounts`}>
          <Button size="sm" variant="danger">Cancel</Button>
        </Link>

      </div>
    </Box>
  );
}


