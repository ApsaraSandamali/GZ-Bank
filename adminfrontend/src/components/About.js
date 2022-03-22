import React, { useState } from "react";
import currency from "../currency.png"
import "./About.css";

export default function About() {
    return (
        <div class="bg_image">
            
            <p class="h6">
                <div class="text-dark fw-bolder">
                <u>Stay On Top Of Your Banking</u>
                </div> <br />
                View your account details and transaction history for the last seven years.
                You can also set up and receive bank Alerts about your banking activity and
                available GZ Offers.
                <hr />
                <div class="text-dark fw-bolder">
                <u>Transfer Funds Between GZ Accounts</u>
                </div>    <br />
                It’s a breeze to move money to your savings account, pay down your credit
                card, loan or credit line, or make a payment on your mortgage. You can also
                transfer money between your GZ and CRB accounts, instantly and for free.
                <hr />
                <div class="text-dark fw-bolder">
                <u>Pay Bills At Any Time</u>
                </div> <br />
                Pay one or multiple bills at once (it will only count as one transaction), and set
                up future payments for regular bills.
                <hr />
                <div class="text-dark fw-bolder">
                <u>Send Money</u>
                </div> <br />
                It’s simple and FREE to send money to anyone with an email address or
                phone number using the e-Transfer service.
            </p>
       
        </div>
    )
}