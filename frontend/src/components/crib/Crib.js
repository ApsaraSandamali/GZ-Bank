import React, { useState, useEffect } from "react";
import "./Crib.css";
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
const jwt = require("jsonwebtoken");

export default function Crib() {

    const [user, setUser] = useState([]);
    const redirect = useHistory();

    const [newId, setId] = useState("");

    const setNewId = (account) => {
        setId(account);
    };

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch(`http://localhost:4200/GZ_Bank/get/${newId}`); 
                const data = await response.json();
                setUser(data);
                
            } catch { }
        };
        getUser();
    }, [setUser]);

    const handleSubmit = async (newAccount) => {
        const response = await fetch(`http://localhost:4200/gzbank/get/${newAccount}`); 
        const data = await response.json();

        console.log(data);

        if (data.customer.length == 0) {
            window.alert("Invalid NIC number")
        }
        else {
            const userToken = jwt.sign(
                {
                    nic: data.customer[0].nic,
                    fname: data.customer[0].full_name,
                    bdate: data.customer[0].birth_date,
                    acc: data.customer[0].acc_num,
                    info: data.customer[0].credit_info,
                },
                'apasra1997',
                { expiresIn: "1h" }
            );

            redirect.push(`/detail/?userToken=${userToken}`);
            }           

        }

    return (
        <div className="bggr2_image">
            <br/> <br/> <br/>
            <form>
                <div className="card marginform ">
                    <div class="card-body" >

                        <div className="mt-3">
                            <label for="enterAccount"><b>Enter your NIC number</b></label>
                        </div>
                        <div className="mt-3">
                            <input type="text-center" placeholder="Enter Your NIC" id="enteraccount" required
                            onInput={e => setNewId(e.target.value)}/>
                        </div>

                        <div className="mt-5">
                            <Button size="sm" variant="primary" onClick={() => handleSubmit(newId)}>Submit</Button>
                        </div>
                    </div>
                </div>
            </form >
        </div>
    )
}