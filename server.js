var express = require('express');
var fs = require('fs')
var app = express();
app.use("/images", express.static(__dirname + '/images'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/html", express.static(__dirname + '/html'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/json", express.static(__dirname + '/json'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (request, response) {
    console.log('GET /')
    fs.readFile('html/login.html', function (err, html) {
        if (err) {
            throw err; 
        } 
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html)
    });  
})

app.post('/login', function (request, response) {
    console.log('POST /' + request.body.email + ' ' + request.body.password)
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    var res = ''
    if (request.body.email == "studenti@freeuni.edu.ge" && 
        request.body.password == "webdeveloper") {
        res = "OK"
    } 
    response.end(res)
})

app.get('/home', function (request, response) {
    console.log('GET /')
    fs.readFile('html/main.html', function (err, html) {
        if (err) {
            throw err; 
        } 
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        response.end(html)
    });  
})

// app.get('/home/account', function (request, response) {
//     console.log('GET /')
//     fs.readFile('html/main.html', function (err, html) {
//         if (err) {
//             throw err; 
//         } 
//         response.writeHead(200, {
//             'Content-Type': 'text/html'
//         })
//         response.end(html)
//     });  
// })

port = 3000
app.listen(port)
console.log(`Listening at http://localhost:${port}`)