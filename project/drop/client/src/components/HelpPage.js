import React from 'react'
import Navbar from './Navbar.js';
import './help.css'

export default function HelpPage() {

    
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="parent">
          <div className="online">
            <h1 className="top">
              Here are some places you can contact if you feel truly lost and in
              need of help.
            </h1>
            <h2 className="headers">Online</h2>
            <h3>For online individual and relationship help!</h3>
            <ul className="list">
              <li className="item">
                <a className="tags" href="https://www.betterhelp.com">
                  Better Help
                </a>
              </li>
              <li className="item">
                <a className="tags" href="https://www.icounseling.com/">
                  iCounseling
                </a>
              </li>
              <li className="item">
                <a className="tags" href="https://www.regain.us/">
                  Regain
                </a>
              </li>
            </ul>
          </div>

          <div className="inperson">
            <h2 className="headers">In Person</h2>
            <h3>For inperson substance and mental health assistance!</h3>
          </div>
          <br></br>
          <iframe
            allowtransparency="true"
            frameborder="0"
            height="220"
            id="mentalhealthtreatmentfinder"
            marginheight="0"
            marginwidth="0"
            name="mentalhealthtreatmentfinder"
            scrolling="no"
            src="https://findtreatment.samhsa.gov/locator/widget/220"
            title="Samhsa.gov"
            width="220"
          >
            {" "}
            https://findtreatment.samhsa.gov/locator/widget/220{" "}
          </iframe>
        </div>
      </div>
    );
}
