const express = require('express');
const {route} = require('./router.js');
const bp = require('body-parser');
const path = require('path');
const app = express();

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
app.use(express.static(path.dirname(__dirname) + '/static'));
app.use(route);

module.exports = {
  app
}
