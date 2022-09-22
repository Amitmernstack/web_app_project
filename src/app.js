const express = require('express');
const path = require('path');
const hbs = require('hbs');
const Path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Public Static Path 

const static_path = path.join(__dirname, "../public");
const tamplate_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


// This viewEngiens in Express 
app.set('view engine', 'hbs');
hbs.registerPartials(partials_path);

app.set("views", tamplate_path);
app.use(express.static(static_path));




// Routing 
app.get("", (req, res)=>{
    res.render("index");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("/weather", (req, res)=>{
    res.render("weather");
});

app.get("*", (req, res)=>{
    res.render("404error", {
 errorMsg: 'Opps! Page Not Found'
    });
});


app.listen(port , () => {
console.log(`Listening to the port ${port}`)
});