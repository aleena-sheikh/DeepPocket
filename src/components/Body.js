import React from "react";
import Links from "./Link";
import Link from "react-router-dom/Link";

export default function Body() {
  return (
    <div className="center">
      <h4
        style={{
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          margin: "1rem",
          border: "2px solid black",
          padding: "0.8rem 0rem",
          backgroundColor: "rgb(51, 46, 46)",
          borderRadius: "25px"
        }}
      >
        Deep Pocket
      </h4>
      <div class="card">
        <div class="additional">
          <div class="user-card">
            <div class="level center">Level 13</div>
            <div class="points center">5,312 Points</div>
            <img className="cardImg" src="stock.png" />
          </div>
          <div class="more-info">
            <h1>Manage finances</h1>
            <div class="coords">
              <span>Username</span>
              <span>Joined January 2019</span>
            </div>
            <div class="coords">
              <span>Student</span>
              <span>Boston, MA</span>
            </div>
            <div>
              {/* <div class="title">Matches</div>
                  <i class="fa fa-gamepad"></i>
                  <div class="value">27</div> */}
              {/* <button style={{"borderRadius":"25px", "margin":"10px"}}>Connect to Bank</button> */}
              <Links />
            </div>
            <div class="stats" style={{ display: "none" }}>
              <div>
                <div class="title">Awards</div>
                <i class="fa fa-trophy"></i>
                <div class="value">2</div>
              </div>
              <div>
                <div class="title">Matches</div>
                <i class="fa fa-gamepad"></i>
                <div class="value">27</div>
              </div>

              <div>
                <div class="title">Social</div>
                <i class="fa fa-group"></i>
                <div class="value">123</div>
              </div>
              <div>
                <div class="title">Fortune</div>
                <i class="fa fa-coffee"></i>
                <div class="value infinity">∞</div>
              </div>
            </div>
          </div>
        </div>
        <div class="general">
          <h1>Manage Finance</h1>
          <p>Connect your bank account</p>
          <span class="more">Mouse over the card for more info</span>
        </div>
      </div>

      <div class="card purple">
        <div class="additional">
          <div class="user-card">
            <div class="level center">Level 13</div>
            <div class="points center">5,312 Points</div>
            <img className="cardImg" src="employee.png" />
          </div>
          <div class="more-info">
            <h1>Financial literacy</h1>
            <div class="coords">
              <span>Username</span>
              <span>Joined January 2019</span>
            </div>
            <div class="coords">
              <span>Student</span>
              <span>Boston, MA</span>
            </div>
            <div>
              {/* <div class="title">Matches</div>
                  <i class="fa fa-gamepad"></i>
                  <div class="value">27</div> */}
              <Link to="/education">
                <button
                  style={{ borderRadius: "25px", margin: "10px" }}
                >Educate Me</button>
              </Link>
            </div>
            <div class="stats">
              <div>
                <div class="title">Awards</div>
                <i class="fa fa-trophy"></i>
                <div class="value">2</div>
              </div>
              <div>
                <div class="title">Matches</div>
                <i class="fa fa-gamepad"></i>
                <div class="value">27</div>
              </div>

              <div>
                <div class="title">Social</div>
                <i class="fa fa-group"></i>
                <div class="value">123</div>
              </div>
              <div>
                <div class="title">Fortune</div>
                <i class="fa fa-coffee"></i>
                <div class="value infinity">∞</div>
              </div>
            </div>
          </div>
        </div>
        <div class="general">
          <h1>Financial Literacy</h1>
          <p>
            Upskilling today’s workforce to give them the skills necessary to
            contribute in tomorrow’s digital economy
          </p>
          <span class="more">Mouse over the card for more info</span>
        </div>
      </div>

      <div class="card green">
        <div class="additional">
          <div class="user-card">
            <div class="level center">Level 13</div>
            <div class="points center">5,312 Points</div>
            <img className="cardImg" src="bit.png" />
          </div>
          <div class="more-info">
            <h1>Budgetting</h1>
            <div class="coords">
              <span>Group Name</span>
              <span>Joined January 2019</span>
            </div>
            <div class="coords">
              <span>Position/Role</span>
              <span>City, Country</span>
            </div>
            <Link to="/visualize">
                <button
                  style={{ borderRadius: "25px", margin: "10px" }}
                >Let's go</button>
              </Link>
            <div class="stats">
              <div>
                <div class="title">Awards</div>
                <i class="fa fa-trophy"></i>
                <div class="value">2</div>
              </div>
              <div>
                <div class="title">Matches</div>
                <i class="fa fa-gamepad"></i>
                <div class="value">27</div>
              </div>
              <div>
                <div class="title">Social</div>
                <i class="fa fa-group"></i>
                <div class="value">123</div>
              </div>
              <div>
                <div class="title">Fortune</div>
                <i class="fa fa-coffee"></i>
                <div class="value infinity">∞</div>
              </div>
            </div>
          </div>
        </div>
        <div class="general">
          <h3>Budget that works</h3>
          <p>Visualize your data and Change your perspective</p>
          <span class="more">Mouse over the card for more info</span>
        </div>
      </div>
    </div>
  );
}
