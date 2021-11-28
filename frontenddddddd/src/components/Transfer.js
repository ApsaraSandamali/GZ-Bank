import React from "react";
import moneyTransfer from "../moneyTransfer.png";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "./Transfer.css";

export default function Transfer() {

    
    const [account, setAccount] = useState([]);

        useEffect(() => {
            const Details = async () => {
                try {
                    const res = await fetch('http://localhost:8070/account/get/66/987500328V');
                    const json = await res.json();
                    setAccount(json);
                } catch { }
            };
            Details();

        }, [setAccount]);
    
    return (
        <div className="bgimage">
            <img src={moneyTransfer} class="rounded float-start text-center" width="600" height="400" />

            <br /> <br /> <br />
            <form>
                <div className="card marginform">
                    <div class="card-body" >
                        <div className="mt-2">
                            <label for="enterAccount"><b>Account Number</b></label>
                        </div>
                        <div className="mt-2">
                            <input type="text" placeholder="Enter Your Account Number" id="enteraccount" required />
                        </div>
                        <div className="mt-3">
                            <label for="enterAccount"><b>NIC Number</b></label>
                        </div>
                        <div className="mt-2">
                            <input type="text" placeholder="Enter Your NIC Number" id="enteraccount" required />
                        </div>
                        <div className="mt-3">
                               <Button size="sm" variant="primary">Submit</Button>      
                        </div>
                    </div>
                </div>
            </form >
        </div>

    )
}