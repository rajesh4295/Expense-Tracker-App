const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();
var routes = require('./routes/route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/',routes);
app.use('/static/dashboard',express.static('./ui/public'));
// app.use('*',express.static('./ui/public'));


const PORT = 4112;
// const dburl = "mongodb://localhost:27017/expensedb";

// mongoose.Promise = global.Promise;
// mongoose.connect(dburl,{ useNewUrlParser: true, useUnifiedTopology: true });

// var db = mongoose.connection;

// db.on('error', ()=>{
//     console.log("error connecting to database");
//     process.exit();
// })

app.listen(PORT, function(){
    console.log("Server running on port "+PORT);
    console.log(`
            ¶▅c●▄███████||▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅||█~ ::~ :~ :►
        ▄██ ▲  █ █ ██▅▄▃▂
        ███▲ ▲ █ █ ███████
        ███████████████████████►
        ◥☼▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙☼◤
    `);
})
