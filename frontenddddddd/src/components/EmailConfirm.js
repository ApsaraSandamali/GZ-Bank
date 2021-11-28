import React from "react";
import "./EmailConfirm.css";
import email from "../email.jpg";
import Button from 'react-bootstrap/Button';

export default function EmailConfirm() {

    return (
        <div className="backimage">
            <br /> 
            
            <br /> 
            <form>
                <div className="card marginform">
                    <div class="card-body" >
                        
                        <div className="mt-2">
                            <label for="enterAccount"><b>ENTER YOUR RECIEVED EMAIL CONFIMATION CODE</b></label>
                        </div>
                        <div className="mt-2">
                            <input type="text-center" placeholder="Enter Your Code" id="enteraccount" required />
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