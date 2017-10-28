const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.listen(procee.env.PORT || 8080);