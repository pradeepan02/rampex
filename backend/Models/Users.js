var mdb = require("mongoose");
var userschema = mdb.Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Password: String,
});
var usermodel = mdb.model("user", userschema);
module.exports = usermodel;
