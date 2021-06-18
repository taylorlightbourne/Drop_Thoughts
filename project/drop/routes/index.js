var express = require('express');
var router = express.Router();

/* GET Users  */
const client = require('../elephant');

router.get('/', function(req, res, next) {
    res.send("working")
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
    try {
        const { username, password, email } = req.body;

        const results = await client.query("INSERT INTO users (username,password,email) VALUES ($1, $2, $3)",
        [username, password, email]
        )
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

module.exports = router;
