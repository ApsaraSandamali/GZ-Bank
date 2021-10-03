import React from "react";
import contact from "../contact.jpg";

export default function Contact() {


    return (
        <div class="alert alert-light " role="alert">
            <img src={contact} class="rounded float-start" width="570" height="370" />
            <div class="text-dark fw-bolder">
                Developed by :
            </div>
            <hr />
            <p class="font-weight-normal text-dark" ><u>ARN Web Technologies</u></p>
            M.H.Apsara Sandamali (AS2018527) <br />
            H.S.R.K.Siriwardana (AS2018543) <br />
            A.N.S.N.Upeksha De Silva (AS2018328)

            <hr />
            <div class="text-dark fw-bolder">
                Address:
            </div>
            <hr />
            Department of Computer Science, <br />
            University of Sri Jayewardenepura, <br />
            Gangodawila, <br />
            Nugegoda

        </div>
    )
}