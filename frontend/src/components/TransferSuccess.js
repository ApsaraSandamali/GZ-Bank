import React from "react";
import "./TransferSuccess.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="bkgr_image">
            <br /> <br />
            <div className="card marginform">
                <div class="card-body" ></div>
                <h1 class="text-center">Transaction Success</h1>

                <div className="mt-3 mb-5">
                    <Link to={`/`}>
                        <Button size="sm" variant="dark" >Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}