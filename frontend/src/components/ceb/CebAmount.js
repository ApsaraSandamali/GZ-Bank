import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./CebAmount.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const jwt = require("jsonwebtoken");

export default function TransferForm() {

    const redirect = useHistory();

    const queryParams = new URLSearchParams(window.location.search);
    const userKey = queryParams.get('userToken');

    var decodedUser = jwt.verify(userKey, 'apasra1997');

    const decodedDbid = decodedUser.dbid;
    const decodedAccount = decodedUser.account;
    const decodedName = decodedUser.name;
    const decodedNic = decodedUser.nic;
    const decodedEmail = decodedUser.email;
    const decodedBalance = decodedUser.balance;


    const [newRecAccount, setRecAccount] = useState("");

    const setNewRecAccount = (account) => {
        setRecAccount(account);
    };

    const [newAmount, setAmount] = useState();

    const setNewAmount = (Amount) => {
        setAmount(Amount);
    };

    const accountUpdate = async (newRecAccount) => {
        const response = await fetch(`http://localhost:8070/account/getAcc/${newRecAccount}`);
        const recipient = await response.json();


        if (recipient.account.length == 0) {
            window.alert("Invalid Receipient Account number");
        } else if (decodedBalance >= newAmount) {

            const userDbId = recipient.account[0]._id;
            var RecBalance = parseFloat(recipient.account[0].balance);

            if (decodedBalance - newAmount > 1000) {
                await axios.put(`http://localhost:8070/account/update/${userDbId}`, {
                    "id": recipient.account[0].id,
                    "name": recipient.account[0].name,
                    "nic": recipient.account[0].nic,
                    "email": recipient.account[0].email,
                    "balance": RecBalance - (-newAmount),

                });
                await axios.put(`http://localhost:8070/account/update/${decodedDbid}`, {
                    "id": decodedAccount,
                    "name": decodedName,
                    "nic": decodedNic,
                    "email": decodedEmail,
                    "balance": decodedBalance - newAmount,

                });

                redirect.push(`/cebsuccess`);
            } else {
                window.alert("You have to maintain a minimum balance of Rs.1000");
            }
        } else {
            window.alert("Insufficient balance in your account");
        }

    }

    return (
        <div className="bg_image">
            <br />

            <form>
                <div class="row">
                    <div class="col-sm-6 mt-4">
                        <div className="card marginform w-75 h-100">
                            <div class="card-body" >

                                <div className="mt-2">
                                    <label for="enterAccount"><b>Your Name</b></label>
                                </div>
                                <div className="mt-2">
                                    <input type="text" placeholder="Name" id="enteraccount" required defaultValue={decodedName} />
                                </div>
                                <div className="mt-2">
                                    <label for="enterAmount"><b>Your balance</b></label>
                                </div>
                                <div className="mt-2">
                                    <input type="text" placeholder="Amount" id="enteramount" required defaultValue={decodedBalance} />
                                    <br />
                                    <small id="emailHelp" class="form-text text-muted font-size: 1rem">Please keep Rs.1000 for minimum balance.</small>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mt-4">
                        <div className="card marginform w-75 h-100">
                            <div class="card-body" >

                                <div className="mt-2">
                                    <label for="enterAccount"><b>Enter CEB account number</b></label>
                                </div>
                                <div className="mt-2">
                                    <input type="text" placeholder="Recipient Account number" id="enteraccount" required
                                        onInput={e => setNewRecAccount(e.target.value)} />
                                </div>
                                <div className="mt-2">
                                    <label for="enterAmount"><b>Enter bill amount</b></label>
                                </div>
                                <div className="mt-2">
                                    <input type="text" placeholder="Amount" id="enteramount" required
                                        onInput={e => setNewAmount(e.target.value)} />
                                </div>

                                <div className="mt-3">
                                    <Button size="sm" variant="primary" onClick={() => accountUpdate(newRecAccount)}>Submit</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </div>
    );

}