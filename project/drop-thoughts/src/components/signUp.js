import React from 'react'

const Sign = () => {
    return (
	<div>
	    <form action="" >
  <div class="container">

    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

    <button type="submit" class="signupbtn">Sign Up</button>
    <button>Sign In</button>
    </div>

	</div>
    );

};

export default Sign;
