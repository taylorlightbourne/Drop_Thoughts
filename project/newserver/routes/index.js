var express = require('express');
var router = express.Router();

/* GET home page. */
const client = require('../elephant');

router.get('/users', async function(req, res, next) {

    try {
        const results = await client.query('SELECT * FROM users');
        res.json(results);
    } catch (err) {
        console.log(err);
    }
});

router.post('/newUser', async function(req, res, next){

    try {
        // const { username, password, email } = req.body;

        const results = await client.query(`INSERT INTO users (username,password,email) VALUES('testname', 'testpass', 'email@aol.com')`
        // [username, password, email]
        );
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


module.exports = router;
