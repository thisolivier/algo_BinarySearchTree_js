// My imports
var express = require("express")
var Bst = require ("./js/classBst")
var d3 = require("d3")

var app = express()
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// const makeDummyBst = () => {
//     let myBst = new Bst()
    
//     for (let index = 0; index < 20; index += 1){
//         let newNum = Math.floor(Math.random()*300) 
//         if (Math.floor(Math.random()+0.5) == 1){
//             newNum *= -1
//         }
//         myBst.add(newNum, myBst)
//     }
// }

// d3.select("p").text("Hello world of data")



app.get('/', function(request, response){
    response.render('index')
})
app.listen(8882, function(){
    console.log("We're listening on port 8882!")
})