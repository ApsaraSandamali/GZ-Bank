import React, { useState, useEffect } from "react";
import "./CebConfirm.css";
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
const jwt = require("jsonwebtoken");

export default function CebConfirm() {

    const redirect = useHistory();
 
    const queryParams = new URLSearchParams(window.location.search);
    const userKey = queryParams.get('userToken');

    var decodedUser = jwt.verify(userKey, 'apasra1997');

    const decodedName = decodedUser.name;

    return (
        <div className="bggr1_image">
            <br /> <br /> <br />
            <form>
                <div className="card marginform m">
                    <div class="card-body" >

                        <div className="mt-3">
                            <label for="name"><b>Your Name</b></label>
                        </div>
                        <div className="mt-3">
                            <input type="text-center" placeholder="Your Name" id="name" required defaultValue={decodedName} disabled />
                        </div>

                        <div className="mt-5">
                            <Link class="edit-Link" className="mr-5" to={`/cebacc`}>
                                <Button size="sm" variant="primary" >Confirm</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </form >

        </div>
    )
}