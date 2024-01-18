//How we are creating a basic http server.

const express = require("express");
const bodyParser = require("body-parser");  // bodyParser(body)
const port = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("Hello!, My name is aman jain");

    const message = req.query.message; //query-parameters(message) ---> localhost:3000?message=123&b=3&c=1
    const b = req.query.b;
    const c = req.query.c;
    console.log(message);
    console.log(b);
    console.log(c);
})

app.post('/post-route', function(req, res){
    console.log("POST Request - Body:", req.body);  //if we want to sent some data to the server we write in the body.

    console.log(req.headers);
    console.log(req.headers.authorization);  //authorization

    res.status(401).send("POST Request Received");  //we can give status code just like this (.status)
});

app.get('/week2', function(req, res){
    res.send("I am going to complete week 2 on 7th of jan, that's my promise");
})

app.listen(port, function(){
    console.log(`server is running on ${port}`);
})