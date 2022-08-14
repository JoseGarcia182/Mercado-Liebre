const express = require("express");
const path = require("path");
const app = express();

app.listen(3030, () => console.log("servidor andando"));

const publicPath = path.resolve (__dirname, './public');
app.use( express.static(publicPath) );

app.get(express.static(path.join(__dirname, "/Public")));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
});