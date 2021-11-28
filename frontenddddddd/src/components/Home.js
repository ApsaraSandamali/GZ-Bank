import React from "react";
import logo from "../logo.jpg";

export default function Home() {

  return (
    <div className='container'>
      <img src={logo} width="300" height="200" />
      <div class="card ">
        <div class="card-header fw-bold bg-dark text-light">
          GENERATION Z BANK
        </div>

        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>“Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we've got 24 hours each.”</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}