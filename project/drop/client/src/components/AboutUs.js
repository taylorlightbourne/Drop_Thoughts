import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar.js';
import Tay_Photo from '../Assets/Tay_Photo.jpg'
import Nischal_Photo from '../Assets/Nischal_Photo.jpg'
import Phil_Photo from '../Assets/Phil_Photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AboutUs = () => {
    return (
      <div className="wrapper">
        <Navbar />
        <div className="header">
          <h1 className="title">About Us</h1>
          <p id="para">
            Welcome to Drop Thoughts, your number one source for tracking your
            progress, achieveing your goals, and improving your mental health.
            We're dedicated to providing everyone with the best services that we
            can offer. Founded in 2021 by Phillip, Taylor, and Nischal, Drop
            Thought's goal is to try to keep everyone feeling positive and
            strong. When we first started out, our passion of helping others
            drove us to create this website. We hope you enjoy our website as
            much as we enjoyed making it. If you have any questions or comments,
            please don't hesitate to contact us. We will get back to everyone as
            soon as we can!
          </p>
        </div>
        <div className="team">
          <div className="team_member">
            <div className="team_img">
              <img id="profile_img" src={Phil_Photo} alt=" Team_image"></img>
            </div>
            <h3>Phillip Francis</h3>
            <p className="role">Project Manager</p>
            <p>My name is Phillip Francis. For the Drop Thoughts project, I worked on the backend and functionality with the help of my teammates.</p>

            <br></br>
            <a>
              <FontAwesomeIcon icon="link" size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/phillip-francis-200b5a209/">
            <FontAwesomeIcon icon={["fab", 'linkedin']} size="2x" />
            </a>
            <a href="https://github.com/Phillip215">
            <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
            </a>
          </div>
          <div className="team_member">
            <div className="team_img">
              <img id="profile_img" src={Tay_Photo} alt="Team_image"></img>
            </div>
            <h3>Taylor Lightbourne</h3>
            <p className="role">Team Member</p>
            <p>My name is Taylor Lightbourne. For the Drop Thoughts project, I worked on the CSS and design with the help of my teammates.</p>
            <br></br>
            <a>
              <FontAwesomeIcon icon="link" size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/taylor-lightbourne-3a13aa20a/">
              <FontAwesomeIcon icon={["fab", 'linkedin']} size="2x" />
            </a>
            <a href="https://github.com/taylorlightbourne">
              <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
            </a>
          </div>
          <div className="team_member">
            <div className="team_img">
              <img id="profile_img" src={Nischal_Photo} alt="Team_image"></img>
            </div>
            <h3>Nischal Pahari</h3>
            <p className="role">Team Member</p>
            <p>My name is Nischal Pahari. For the Drop Thoughts project, I worked on the functionality with the help of my teammates.</p>
            <br></br>
            <a>
              <FontAwesomeIcon icon="link" size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/nischal-pahari-/">
              <FontAwesomeIcon icon={["fab", 'linkedin']} size="2x" />
            </a>
            <a href="https://github.com/nischalp444">
            <FontAwesomeIcon icon={["fab", "github-square"]} size="2x" />
            </a>
          </div>
        </div>
      </div>
    );
};
export default AboutUs;