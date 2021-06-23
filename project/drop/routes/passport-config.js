const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')

function intialize(passport) {
  const authenticateUser = async (email, password, done) => {

    try {
      // check in your database if the user exist
      // const user = await User.findOne()

        const email = await client.query('SELECT * FROM users Where email=$1',
        [email] );

      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else { return done(null, false, {message: "Password incorrect"})
    }
    } catch (e) {
      return done(e)
    }

  passport.use(new LocalStrategy (authenticateUser))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => done(null, user))
}
}
module.exports = intialize
