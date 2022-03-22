import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./NewAccount.css";
const jwt = require("jsonwebtoken");



export default function NewAccount() {

    const queryParams = new URLSearchParams(window.location.search);
    const userKey = queryParams.get('userToken');

    var decodedUser = jwt.verify(userKey, 'apasra1997');

    const maxAcc = decodedUser.account;
    const newAcc = maxAcc + 1;
    console.log(maxAcc);

    return (
        <div className="backgrounimage">
            <br /> <br /> <br />
            <form>
                <div className="card marginform m">
                    <div class="card-body" ></div>
                    <div className="mt-2">
                        <label for="enterAccount"><b>New Account Number</b></label>
                    </div>
                    <div className="mt-2">
                        <input type="text" placeholder="Name" id="enteraccount" required defaultValue={newAcc} disabled />
                        <br />
                        <small id="emailHelp" class="form-text text-muted font-size: 1rem">This is the auto generated Next Account Number </small>

                    </div>

                    <div className="mt-3 mb-5">
                        <Link to={`/add/?user=${newAcc}`}>
                            <Button size="sm" variant="dark" >Continue</Button>
                        </Link>
                    </div>
                </div>
            </form >
        </div>

    )
}