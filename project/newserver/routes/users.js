var express = require('express');
var router = express.Router();

const client = require('../elephant');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    try {
        const results = await client.query('SELECT * FROM users');
        const view = res.json(results);
        console.log(view)
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
