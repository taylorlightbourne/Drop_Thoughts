import React from 'react'
import Navbar from './Navbar.js';

export default function HelpPage() {

    
    return (
      <div>
          <div>
          <Navbar/>
          </div>
        <div className="parent"> 
            <div className="online"> 
            <h1>
            Here are some places you can contact if you feel truly lost and in
            need of help.
            </h1>
            <h2 className="header">Online</h2>
            <ul>
                <li>
                    <a className="tags" href="https://www.betterhelp.com">
                    Better Help
                    </a>
                </li>
                <li>
                    <a className="tags" href="https://www.icounseling.com/">
                    iCounseling
                    </a>
                </li>
                <li>
                    <a className="tags" href="https://www.regain.us/">
                    Regain
                    </a>
                </li>
            </ul>
            </div>

            <div className="inperson">
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
        </div>
    );
}
