import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CreateAccount.css";
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./ConfirmnewAcc.css";
import newAccountimg from "../newacc.jpg";
const jwt = require("jsonwebtoken");

export default function ConfirmnewAcc() {

    const redirect = useHistory();
    const [maxUser, setMaxUser] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch(`http://localhost:8070/account/max`);
                const data = await response.json();
                setMaxUser(data);
            } catch { }
        };
        getUser();
    }, [setMaxUser]);

    const createAccNo = async () => {
        const response = await fetch(`http://localhost:8070/account/max`);
        const data = await response.json();

        if (data.account.length == 0) {
            window.alert("Cannot create a new account")
        }
        else {
            const userToken = jwt.sign(
                {                  
                    account: data.account[0].id
                   
                },
                'apasra1997',
                { expiresIn: "1h" }
            );


            redirect.push(`/newacc/?userToken=${userToken}`);
        }
    }
    return (
        <div className="backgrounimage">
            <img src={newAccountimg} class="rounded float-start text-center" width="600" height="405" />

            <br /> <br /> <br />
            <form>
                <div className="card marginform m">
                    <div class="card-body" ></div>
                    <div className="mt-1">
                        <label for="enterAccount"><b> <h4> Do you wish to create a New Account </h4></b></label>
                    </div>

                    <div className="mt-4 mb-5">
                        <Button size="sm" variant="dark" onClick={() => createAccNo()} >Confirm</Button>
                    </div>
                </div>
            </form >
        </div>

    )
}