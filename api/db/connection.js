var mysql = require('mysql');

// con = mysql.createConnection({
//   host: "db.cs.dal.ca",
//   user: "acamara",
//   password: "PnWij4aiZNRdfT58DEQv2jZgs",
//   database: "acamara"
// });
con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "acamara"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports = con;