const express = require("express");
const path = require("path");
const app = express();

app.listen(process.env.PORT || 3030, () => console.log("servidor andando"));


app.use( express.static("Public"));



app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
});