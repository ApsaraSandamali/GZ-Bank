import React, { useState } from "react";
import axios from "axios";

export default function CreateAccount() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [nic, setNic] = useState("");
    const [balance, setBalance] = useState("");

    function sendData(e) {
        e.preventDefault();
        // alert("insert");

        const newAccount = {
            id,
            name,
            nic,
            balance
        }
        //  console.log(newStudent);

        axios.post("http://localhost:8070/account/add", newAccount).then(() => {
            alert("Account Added")
            setId('');
            setName('');
            setNic('');
            setBalance('');
            // this.setState({name:'', age:'', gender:'' });
        }).catch((err) => {
            alert(err)
        })
    }

    return (
        <div className="container">
            <form onSubmit={sendData}>

                <div class="mb-3">
                    <label for="id" class="form-label">Account Number</label>
                    <input type="text" class="form-control" id="id" aria-describedby="Enter Account number" onChange={(e) => {
                        setId(e.target.value);
                    }} />
                </div>

                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="Enter name" onChange={(e) => {
                        setName(e.target.value);
                    }} />
                </div>

                <div class="mb-3">
                    <label for="nic" class="form-label">NIC Number</label>
                    <input type="text" class="form-control" id="nic" aria-describedby="Enter NIC Number" onChange={(e) => {
                        setNic(e.target.value);
                    }} />
                </div>

                <div class="mb-3">
                    <label for="balance" class="form-label">Balance</label>
                    <input type="text" class="form-control" id="balance" aria-describedby="Enter Balance" onChange={(e) => {
                        setBalance(e.target.value);
                    }} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

