var express = require('express')
var app = express()

app.set('views', __dirname + '/views');

// 3000 포트로 서버 오픈
app.listen(3000, function() {
    console.log("it's 3000 port")
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});