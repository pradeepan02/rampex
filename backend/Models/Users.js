var mdb = require("mongoose");
var userschema = mdb.Schema({
  Name: String,
  Email: String,
  Password: String,
});
var usermodel = mdb.model("user", userschema);
module.exports = usermodel;
