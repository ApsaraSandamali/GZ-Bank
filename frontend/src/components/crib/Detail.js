import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./Detail.css";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
const jwt = require("jsonwebtoken");

export default function TransferForm() {

    const redirect = useHistory();

    const queryParams = new URLSearchParams(window.location.search);
    const userKey = queryParams.get('userToken');

    var decodedUser = jwt.verify(userKey, 'apasra1997');

    const decodedNic = decodedUser.nic;
    const decodedFname = decodedUser.fname;
    const decodedBdate = decodedUser.bdate;
    const decodedAcc = decodedUser.acc;
    const decodedInfo = decodedUser.info;

    return (
        <div className="backgrounimage">
            <form >

                <br/>
                <div class="form-group row">
                    <label for="id" class="col-sm-2 col-form-label">NIC Number</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control" id="id" defaultValue={decodedNic} disabled />
                    </div>
                </div>

                <br />
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Full Name</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control" id="name" defaultValue={decodedFname} disabled />
                    </div>
                </div>

                <br />
                <div class="form-group row">
                    <label for="bdate" class="col-sm-2 col-form-label">Birth Date</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control" id="bdate" defaultValue={decodedBdate} disabled />
                    </div>
                </div>

                <br />
                <div class="form-group row">
                    <label for="accno" class="col-sm-2 col-form-label">Account Number</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control" id="accno" defaultValue={decodedAcc} disabled />
                    </div>
                </div>

                <br />
                <div class="form-group row">
                    <label for="info" class="col-sm-2 col-form-label">Credit Info</label>
                    <div class="col-sm-10">
                        <input type="text" readonly class="form-control" id="info" defaultValue={decodedInfo} disabled />
                    </div>
                </div>

                <br/>
                <Link to={`/`}>
                    <button type="submit" class="mt-2 btn btn-dark font-weight-bold" >Home</button>
                </Link>
            </form>
        </div>
    )
}