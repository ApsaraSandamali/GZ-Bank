import React, { useState } from "react";
import axios from "axios";
import "./CreateAccount.css";
import { useHistory } from 'react-router-dom';

export default function CreateAccount() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [nic, setNic] = useState("");
    const [email, setEmail] = useState("");
    const [balance, setBalance] = useState("");
    const redirect = useHistory();

    function sendData(e) {
        e.preventDefault();
        // alert("insert");

        const newAccount = {
            id,
            name,
            nic,
            email,
            balance
        }

        axios.post("http://localhost:8070/account/add", newAccount).then(() => {
            alert("Account Added")
            setId('');
            setName('');
            setNic('');
            setEmail('');
            setBalance('');
                
        }).catch((err) => {
            alert(err)
        })
        redirect.push(`/add/`);
        
    }

    return (
        <div className="backgrounimage"> 
            <form onSubmit={sendData}>

                <div className="line1">
                    <label for="id" class="form-label">Account Number</label>
                    <input type="text" class="form-control" id="id" placeholder="Enter account number" onChange={(e) => {
                        setId(e.target.value);
                    }} />
                </div>

                <div className="line2">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter name" onChange={(e) => {
                        setName(e.target.value);
                    }} />
                </div>

                <div className="line3">
                    <label for="nic" class="form-label">NIC Number</label>
                    <input type="text" class="form-control" id="nic" placeholder="Enter NIC Number" onChange={(e) => {
                        setNic(e.target.value);
                    }} />
                </div>

                <div className="line4">
                    <label for="email" class="form-label">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="Enter Email" onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                </div>

                <div className="line5">
                    <label for="balance" class="form-label">Balance</label>
                    <input type="text" class="form-control" id="balance" placeholder="Enter Balance" onChange={(e) => {
                        setBalance(e.target.value);
                    }} />
                </div>

                <button type="submit" class="mt-2 btn btn-light font-weight-bold">Submit</button>
            </form>
        </div>
    )
}
