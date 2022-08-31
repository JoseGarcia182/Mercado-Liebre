const express = require("express");
const path = require("path");
const app = express();

app.listen(process.env.PORT || 3030, () => console.log("servidor andando"));


app.use( express.static("public"));



app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.post("/login", (req, res) => {
    console.log("Acceso consedido");
    res.redirect("/");
});

app.post("/register", (req, res) => {
    console.log("Registro completado");
    res.redirect("/");
});

app.get('/home', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
});
