const express = require("express");
const functions = require("./functions")
const server = express();
const port = 3000;
const path = require("path")

server.set("view engine", "hbs");
server.use("/assets", express.static(path.join(__dirname,"./assets")));
server.use("/js", express.static(path.join(__dirname,"./js")));

server.get("/", function(req, res) {
    res.render("index", {
        pageTitle: "Lekcja Pierwsza",
        someText: functions.text,
        subText: functions.subText()
    })
})

server.get("/about", function(req, res) {
    res.render("about")
})
server.get("/section/technology", function(req, res) {
    res.send("strona technologiczna")
})


server.listen(port, (err)=>{
    if(err){
      return  console.error(`Coś poszło nie tak :( ${err}`)
    }
    console.log(`Aplikacja działa na porcie ${port}`)
});

