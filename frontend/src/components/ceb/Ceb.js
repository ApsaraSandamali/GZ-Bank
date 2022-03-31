import React, { useState, useEffect } from "react";
import "./Ceb.css";
import ceb from "../../ceb1.png";
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
const jwt = require("jsonwebtoken");

export default function Ceb() {

    const [user, setUser] = useState([]);
    const redirect = useHistory();

    const [newCebAccount, setCebAccount] = useState("");

    const setNewCebAccount = (account) => {
        setCebAccount(account);
    };

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch(`http://localhost:8080/gzbank/get/${newCebAccount}`); 
                const data = await response.json();
                setUser(data);
                
            } catch { }
        };
        getUser();
    }, [setUser]);

    const handleSubmit = async (newAccount) => {
        const response = await fetch(`http://localhost:8080/gzbank/get/${newAccount}`);
        const data = await response.json();

        if (data.Customer.length == 0) {
            window.alert("Invalid CEB Account number")
        }
        else {
            const userToken = jwt.sign(
                {
                    nic: data.Customer[0].idNumber,
                    fname: data.Customer[0].fName,
                    lname: data.Customer[0].lName,
                },
                'apasra1997',
                { expiresIn: "1h" }
            );

            redirect.push(`/cebconfirm/?userToken=${userToken}`);
            }           

        }

    return (
        <div className="bggr11_image">
           

            <br/> <br/> <br/>
            

            <form>
                <div className="card marginform m float-xl-end">
                    <div class="card-body" >

                        <div className="mt-3">
                            <label for="enterAccount"><b>Enter your Electricity Acc Number</b></label>
                        </div>
                        <div className="mt-3">
                            <input type="text-center" placeholder="Your Electricity Acc No" id="enteraccount" required
                            onInput={e => setNewCebAccount(e.target.value)}/>
                        </div>

                        <div className="mt-5">
                            <Button size="sm" variant="primary" onClick={() => handleSubmit(newCebAccount)}>Submit</Button>
                        </div>
                    </div>
                </div>
            </form >
            
        </div>
    )
}