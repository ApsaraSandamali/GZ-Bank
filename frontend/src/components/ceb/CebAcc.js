import React, { useState, useEffect } from "react";
import "./CebAcc.css";
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com';
const jwt = require("jsonwebtoken");
var randomize = require('randomatic');

export default function Ceb() {

    const [user, setUser] = useState([]);
    const redirect = useHistory();

    const [newAccount, setAccount] = useState("");

    const setNewAccount = (account) => {
        setAccount(account);
    };

    const [newNIC, setNIC] = useState("");

    const setNewNIC = (NIC) => {
        setNIC(NIC);
    };

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch(`http://localhost:8070/account/get/${newAccount}/${newNIC}`);
                const data = await response.json();
                setUser(data);
            } catch { }
        };
        getUser();
    }, [setUser]);

    //compare user account and NIC with database data 
    const handleSubmit = async (newAccount, newNIC) => {
        const response = await fetch(`http://localhost:8070/account/get/${newAccount}/${newNIC}`);
        const data = await response.json();

        if (data.account.length == 0) {
            window.alert("Invalid User Account number or NIC")
        }
        else {
            const code = randomize('A0', 6);    //generate random code to verify email

            //send data by a userToken
            const userToken = jwt.sign(
                {
                    dbid: data.account[0]._id,
                    account: data.account[0].id,
                    nic: data.account[0].nic,
                    email: data.account[0].email,
                    name: data.account[0].name,
                    balance: data.account[0].balance,
                    code: code
                },
                'apasra1997',
                { expiresIn: "1h" }
            );
            console.log(userToken);

            const templatesParams = {
                name: data.account[0].name,
                email: data.account[0].email,
                code: code
            }

            //send verification to email
            emailjs.send('gmail', 'temp01', templatesParams, 'user_PtmQDCk1083aozAyN3WpL')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (err) {
                    console.log('FAILED...', err);
                });


            redirect.push(`/cebemail/?userToken=${userToken}`);

        }

    };

    return (
        <div className="bggr1_image">
            <br/><br/><br/>
            <form>
                <div className="card marginform">
                    <div class="card-body" >
                        <div className="mt-2">
                            <label for="enterAccount"><b>Account Number</b></label>
                        </div>
                        <div className="mt-2">
                            <input type="text" placeholder="Enter Your Account Number" id="enteraccount" required
                                onInput={e => setNewAccount(e.target.value)} />
                        </div>
                        
                        <div className="mt-3">
                            <label for="enterAccount"><b>NIC Number</b></label>
                        </div>
                        <div className="mt-2">
                            <input type="text" placeholder="Enter Your NIC Number" id="enteraccount" required
                                onInput={e => setNewNIC(e.target.value)} />
                        </div>
                        <div className="mt-3">
                            <Button size="sm" variant="primary" onClick={() => handleSubmit(newAccount, newNIC)} >Submit</Button>
                        </div>
                    </div>
                </div>
            </form >
        </div>

    )
}