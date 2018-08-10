"use strict";
const express = require('express');
const app = express();
var pug = require('pug');
app.set("view engine","pug");
app.set("views","./components/common");


app.get('/', (req, res) => res.render("header.pug"));

app.listen(3000, () => console.log('Example app listening on port 3000!'));