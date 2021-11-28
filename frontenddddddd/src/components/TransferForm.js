import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "./TransferForm.css";
import transfer from "../transfer.jpg";


export default function TransferForm() {

    return (
        <div className="bg_image">
            <br/>
            <div className="left">
            <img src={transfer} class="rounded float-start text-center" width="475" height="275" />
            </div>
            <form>
                <div className="card marginform">
                    <div class="card-body" >
                        
                        <div className="mt-2">
                            <label for="enterAccount"><b>Enter recipient account number</b></label>
                        </div>
                        <div className="mt-2">
                            <input type="text" placeholder="Recipient Account number" id="enteraccount" required />
                        </div>
                        <div className="mt-2">
                            <label for="enterAmount"><b>Enter amount</b></label>
                        </div>
                        <div className="mt-2">
                            <input type="text" placeholder="Amount" id="enteramount" required />
                        </div>

                        <div className="mt-3">
                            <Button size="sm" variant="primary">Submit</Button>
                        </div>
                    </div>
                </div>
            </form >
            </div>
    );

}