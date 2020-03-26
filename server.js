var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function (request, response) {
    console.log('server is started');
    response.send('<h1>AJAX -> dz16</h1>')
});

server.get('/userGet', function (request, response) {
    console.log(request.query);
    var obj = request.query;
    obj.userName = 'Maksym';
    obj.userSurname = 'Davydiak';
    obj.userAge = 19;
    obj.userResidence = 'Kalush';
    response.send('You have succesfully used GET : ' + JSON.stringify(obj));
});

server.post('/userPost', function (request, response) {
    console.log(request.body);
    var obj = request.query;
    obj.userName = 'Alexander';
    obj.userSurname = 'Oliynik';
    obj.userAge = 22;
    obj.userResidence = 'Kyiv';
    response.send('You have succesfully used POST : ' + JSON.stringify(obj));
});

server.listen(3000);