import React from "react";
import { withRouter } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";
import Link from "react-router-dom/Link";

function Education() {
  return (
    <div style={{ backgroundColor: "white", height: "2400px" }}>
      <nav class="navbar" style={{ backgroundColor: "rgb(51, 46, 46)" }}>
        <span class="navbar-text">
          <h3 style={{ color: "white" }}>Your Account</h3>
        </span>
      </nav>

      <div>
          {/* <button>Learn</button>
          <button>Meet</button>
          <button>Test</button> */}
          <br>
          </br>
          <br>
          </br>
        <Link to='/meetup'> <button type="button" class="btn btn-primary btn-lg btn-block" style={{'marginBottom': '1.3rem'}}>MeetUp</button> </Link> 
        <Link to='/learning'><button type="button" class="btn btn-secondary btn-lg btn-block" style={{'marginBottom': '1.3rem'}}>Learn</button></Link>
        <Link to='/test'><button type="button" class="btn btn-success btn-lg btn-block">Test</button></Link>
\      </div>
    </div>
  );
}
export default Education;
