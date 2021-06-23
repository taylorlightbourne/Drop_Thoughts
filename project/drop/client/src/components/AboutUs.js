import React from 'react';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div className="wrapper">
            <div className="header">
                <h1>About Us</h1>
                <h3>
                    Welcome to Drop Thoughts, your number one source for tracking your progress, achieveing your goals, and improving your mental health. We're dedicated to providing everyone with the best services that we can offer.
                    Founded in 2021 by Phillip, Taylor, and Nischal, Drop Thought's goal is to try to keep everyone feeling positive and strong. When we first started out, our passion of helping others drove us to create this website.
                    We hope you enjoy our website as much as we enjoyed making it. If you have any questions or comments, please don't hesitate to contact us. We will get back to everyone as soon as we can!
                </h3>
            </div>
            <div className="team">
                <div className="team_member">
                    <div className="team_img">
                        <img id="profile_img" src="https://www.pngitem.com/pimgs/m/421-4213053_default-avatar-icon-hd-png-download.png" alt="Team_image"></img>
                    </div>
                    <h3>Phillip Francis</h3>
                    <p className="role">Project Manager</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                    <br></br>
                    <a href="https://www.linkedin.com/in/phillip-francis-200b5a209/">
                        <img
                            alt=""
                            src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png"
                            height="30"
                        /></a>
                    <a href="https://github.com/Phillip215">
                        <img
                            alt=""
                            src="https://image.flaticon.com/icons/png/512/25/25231.png"
                            height="30"
                        /></a>
                </div>
                <div className="team_member">
                    <div className="team_img">
                        <img id="profile_img" src="https://www.pngitem.com/pimgs/m/421-4213053_default-avatar-icon-hd-png-download.png" alt="Team_image"></img>
                    </div>
                    <h3>Taylor Lightbourne</h3>
                    <p className="role">Team Member</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                    <br></br>
                    <a href="https://www.linkedin.com/in/taylor-lightbourne-3a13aa20a/">
                        <img
                            alt=""
                            src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png"
                            height="30" /></a>
                    <a href="https://github.com/taylorlightbourne">
                        <img
                            alt=""
                            src="https://image.flaticon.com/icons/png/512/25/25231.png"
                            height="30" /></a>
                </div>
                <div className="team_member">
                    <div className="team_img">
                        <img id="profile_img" src="https://www.pngitem.com/pimgs/m/421-4213053_default-avatar-icon-hd-png-download.png" alt="Team_image"></img>
                    </div>
                    <h3>Nischal Pahari</h3>
                    <p className="role">Team Member</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                    <br></br>
                    <a href="https://www.linkedin.com/in/nischal-pahari-/">
                        <img
                            alt=""
                            src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png"
                            height="30" /></a>
                    <a href="https://github.com/nischalp444">
                        <img
                            alt=""
                            src="https://image.flaticon.com/icons/png/512/25/25231.png"
                            height="30" /></a>
                </div>
            </div>
        </div>
    )
};
export default AboutUs;