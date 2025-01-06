var express = require("express");
var app = express();
var path = require("path");
var mdb = require("mongoose");
const usermodel = require("./Models/Users");
const contactmodel = require("./Models/Contact");
const cors = require("cors");
const env = require("dotenv");
env.config();
app.use(cors());
app.use(express.json());
mdb
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch(() => {
    console.log("Mongodb Not Connected");
  });

const PORT = 3001;
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

// app.get("/signin", async (req, res) => {
//   try {
//     const a = await usermodel.find();
//     console.log(a)
//     res.json(a)
//   } catch (error) {
//     console.log(error)
//   }
// })
app.post("/signup", (req, res) => {
  // var { FirstName, LastName, Email, Password } = req.body;

  try {
    var newuser = new usermodel(req.body);
    // var newuser = new usermodel({
    //   FirstName: FirstName,
    //   LastName: LastName,
    //   Email: Email,
    //   Password: Password,
    // });
    if (newuser.save()) {
      res.json({ message: "Signedup Successful", issignup: true });
      console.log("user added");
    } else {
      res.json({ message: "Signedup fail", issignup: false });
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/signin", async (req, res) => {
  var { Email, Password } = req.body;
  try {
    var existuser = await usermodel.findOne({ Email: Email });

    if (existuser) {
      // Check if the array is not empty
      if (existuser.Password === Password) {
        // Access the first element of the array
        res.json({ message: "Login Successful", isloggedin: true });
      } else {
        res.json({ message: "Invalid Credentials", isloggedin: false });
      }
    } else {
      res.json({ message: "Login Failed", isloggedin: false });
    }
  } catch (error) {
    console.log("Login Failed");
  }
});

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
