import React, { useState } from "react";
import "./EmailConfirm.css";
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
const jwt = require("jsonwebtoken");


export default function EmailConfirm() {

    const [user, setUser] = useState([]);
    const redirect = useHistory();

    const [newCode, setCode] = useState("");

    const setNewCode = (code) => {
        setCode(code);
    };

    const queryParams = new URLSearchParams(window.location.search);
    const userKey = queryParams.get('userToken');

    var decodedUser = jwt.verify(userKey, 'apasra1997');

    const verifyCode = decodedUser.code;

    const handleSubmit = async (newCode) => {

        //compare the code and verify email
        if (verifyCode == newCode) {

            redirect.push(`/email/?userToken=${userKey}`);
        }
        else {
            window.alert("Invalid Code")
        }
    }


    return (
        <div className="backimage">
            <br /> <br />
            <div class="text-dark fw-bolder">
                <h3> WE SENT A CODE TO YOUR EMAIL. PLEASE CHECK YOUR EMAIL. </h3>
            </div>
            <br />
            <form>
                <div className="card marginform ">
                    <div class="card-body" >

                        <div className="mt-3">
                            <label for="enterAccount"><b>Enter received code</b></label>
                        </div>
                        <div className="mt-3">
                            <input type="text-center" placeholder="Enter Your Code" id="enteraccount" required
                                onInput={e => setNewCode(e.target.value)} />

                        </div>

                        <div className="mt-5">
                            <Button size="sm" variant="primary" onClick={() => handleSubmit(newCode)}>Submit</Button>
                        </div>
                    </div>
                </div>
            </form >
        </div>
    );
}