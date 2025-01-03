var express = require("express");
var app = express();
var path = require("path");
var mdb = require("mongoose");
const usermodel = require("./Models/Users");
const contactmodel = require("./Models/Contact");


app.use(express.json());
mdb
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch(() => {
    console.log("Mongodb Not Connected");
  });

const PORT = 3001;

app.post("/signup", (req, res) => {
  var { FirstName, LastName, Email, Password } = req.body;
  console.log(FirstName, LastName, Email, Password);
  try {
    var newuser = new usermodel({
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Password: Password,
    });
    newuser.save();
    res.status(200).send("user added succesfully");
    console.log("user added succesfully");
  } catch (error) {
    console.log(error);
  }
});

app.post("/contact", (req, res) => {
  var { Username, Email, Messages } = req.body;
  try {
    var newmess = new contactmodel({
      Username: Username,
      Email: Email,
      Messages: Messages,
    });
    newmess.save();
    res.send("Messages Sent Successfuly");
  } catch (error) {
    console.log(error);
  }
});

app.get("/signin", async (req, res) => {
  try {
    const a = await usermodel.find();
    console.log(a)
    res.json(a)
  } catch (error) {
    console.log(error)
  }
})


// app.get("/", (req, res) => {
//   res.send(`hello`);
// });
// app.get("/json", (req, res) => {
//   res.json({ server: "Welcome to Backend", url: "localhost", port: PORT });
// });
// app.get("/static", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });
app.listen(PORT, () => {
  console.log(`Server starts \nURL: http://localhost:${PORT}`);
});
