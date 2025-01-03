var mdb = require("mongoose");
var contactschema = mdb.Schema({
  Username: String,
  Email: String,
  Messages: String,
});
var contactmodel = mdb.model("contact", contactschema);
module.exports = contactmodel;
