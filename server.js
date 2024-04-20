const express = require("express");
const app = express();
const path = require("path");
const mailer = require("nodemailer");
const { ppid } = require("process");
const bodyparser = require("body-parser");
const port = process.env.port  || 8080;
app.use(express.urlencoded({extended:true}));
app.listen(port, () => {
    console.log("ok");
});
;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/public/index.html");

});

app.get("/projects", (req, res) => {
    res.sendFile(__dirname+"/public/ourProjects.html")
});
app.get("/team", (req, res) => {
    res.sendFile(__dirname+"/public/ourTeam.html");
});

app.get("/hire", (req, res) => {
    res.sendFile(__dirname+"/public/assignProject.html");
});


app.get("*" ,(req, res,next) => {
  res.sendFile(__dirname+"/public/404.html");
});
