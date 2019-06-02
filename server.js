var express = require('express')
var path = require('path')
var app = express()
var PORT = process.env.PORT || 8081;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/main.css", function (req, res){
  res.sendFile(path.join(__dirname, "/assets/css/main.css"));
})

// app.get("/burgers.js", function (req, res){
//   res.sendFile(path.join(__dirname, "/assets/js/burgers.js"));
// })

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  

