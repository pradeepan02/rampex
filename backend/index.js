var express = require("express");
var app = express();
const PORT = 3001;
app.get('/', (req, res) => {
    res.send(`hello`)
})
app.listen(PORT, () => {
  console.log(`Server starts \nURL: http://localhost:${PORT}`);
});
