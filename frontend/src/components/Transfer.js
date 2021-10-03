import React from "react";
import moneyTransfer from "../moneyTransfer.png";
import TransferForm from "./TransferForm";

export default function Transfer() {

    return (
        <div className="alert alert-light " role="alert">
            <img src={moneyTransfer} class="rounded float-start text-center" width="570" height="370" />
            <form>
                <div class="form-group ">
                    <br /> <br /> <br /> <br /> <br />
                    <label for="enterAccount"><b>Account Number</b></label>
                    <br />  <br />
                    <input type="text" placeholder="Enter Account" id="enteraccount" required />
                    <br />
                </div>
                <br/>
                    <button type="submit" class="btn btn-primary" onClick={TransferForm} >Submit</button>           
            </form>
        </div>
    )
}

