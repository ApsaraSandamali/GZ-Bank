import React from "react";
import logo from "../logo.jpg";

function Header() {

  return (
    <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
      <div class="container-fluid">
        <img src={logo} width="100" height="70" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="nav nav-tabs">

            <li class="nav-item">
              <a class="nav-link text-dark fw-bolder" href="/">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-dark fw-bolder" href="/about">About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-dark fw-bolder" href="/transfer">Money Transfer</a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-dark fw-bolder"  href="/email" >Pay Bill</a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-dark fw-bolder" href="/get">Apply Loan</a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-dark fw-bolder" href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;