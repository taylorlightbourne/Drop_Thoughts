if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const router = express.Router();
const cors = require("cors")
const bcrypt = require("bcrypt")
const session = require("express-session")
const passport = require('passport')
const flash = require('express-flash')


const intializePassport = require('./passport-config')

//access our form information inside of our req
router.use(express.urlencoded({ extended: false }));
router.use(cors())
router.use(flash())
router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

router.use(passport.initialize())
router.use(passport.session())
intializePassport(
    passport

)


/* Users  */
const client = require('../elephant');
const app = require('../app');



router.get('/', AuthCheck, function(req, res, next) {
    res.render("http://localhost:3000/"), {name: req.user.name}
})

router.get('/users', async function(req, res, next) {
    try {
        const results = await client.query('SELECT * FROM users');
        res.json(results);
    } catch (err) {
        console.log(err);
    }
});

router.post('/newUser', async function(req, res, next){
    console.log("sending user to db")
    try {
        const hashedPass = await bcrypt.hash(req.body.password, 10)

        const { username, password, email } = req.body;

        const results = await client.query("INSERT INTO users (username,password,email) VALUES ($1, $2, $3)",
        [username, password, email]
        )
        res.redirect('http://localhost:3000/login')
    } catch (err) {
        console.log(err);
    }
});

router.put('/updateUser', async function(req, res, next){
    try {
        const results = await client.query(`UPDATE users SET password = 'newpass' WHERE user_id = 1`
        )
    } catch (err) {
        console.log(err)
    }

});

router.delete("/remove/:id", async function(req, res, next){
    try{
        const { id } = req.params;
        const removeUser = await client.query(
        "DELETE FROM users WHERE user_id = $1",
        [id]
    );
    } catch (err) {
    console.error(err.message)
    }
});

// Login

router.post('/login', passport.authenticate('local', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: 'http://localhost:3000/login',
    failureFlash: true
}), (req,res) => { res.json()})

function AuthCheck(req, res, next) {
    if (req.isAutheticated()) {
        return next()
    }
    res.redirect('http://localhost:3000/login')
}


module.exports = router;
