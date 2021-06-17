const pg = require('pg');

const conString = "postgres://xtshutfd:G3ALD9_1AlLsiIzJk5BsGSs1Z21NCN7T@batyr.db.elephantsql.com/xtshutfd"
let client = new pg.Client(conString);
// console.log(client)
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
  });
});

module.exports = client;
