const express = require('express')
const app = express()
const path = require('path')


app.use(express.json())


//app.use(express.static(__dirname + "/public"))
app.use(express.static("./public/images"))
app.set("view engine", "ejs")
app.set("views", "./views")


const moths = require("./data/mothinfo.json")
// import students from "data/students.json";


app.get("/", (req, res) => {
    res.render("index", {moths})
});


app.use(express.static("./public"))
 app.get("/about/:id", (req, res) => {

    const moth = moths.find(s => s.id == req.params.id)
    
 
          res.render("about", {moth});
}) 


app.get("/display", (req,res)=>{
    res.render('display', {moths});
})

app.all("*", (req, res) => {
    res.status(404).send("404 Not Found")
})


const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})