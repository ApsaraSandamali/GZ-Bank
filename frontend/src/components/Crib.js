import React from "react";
import "./Crib.css";
import Button from 'react-bootstrap/Button';

export default function Crib() {

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
                            <input type="text-center" placeholder="Enter Your NIC" id="enteraccount" required/>
                        </div>

                        <div className="mt-5">
                            <Button size="sm" variant="primary" >Submit</Button>
                        </div>
                    </div>
                </div>
            </form >
        
        </div>
    )
}