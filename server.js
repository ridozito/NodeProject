"use strict";
const express = require('express');
const app = express();
const path = require('path');
var pug = require('pug');
app.set("view engine","pug");
 app.set("views",[path.join(__dirname,"app/views/common"),path.join(__dirname,"app/views/index")]);
app.use(express.static(__dirname+'/app/views/public'));

app.get('/', (req, res) => res.render("header.pug"));
app.get('/index', (req, res) => res.render("index.pug"));
app.listen(3000, () => console.log('Example app listening on port 3000!'));