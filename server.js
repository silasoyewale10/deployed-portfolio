'use strict';

const express = require ('express');  
const app = express(); //creates a server object. 

//to make the file run, i meed to tell it to listen. listen takes in port number

app.listen(3000, function() {
    console.log("you started a server on port 3000")
});    //always going to be 3000. no known application uses this port so developers always use this port for testing. 


//routes are addresses and end point that respomnd to a request. // request is what is talking to thr sever
app.get('/gingerkisses', function (request, response){
    console.log("someone wants ginger kisses")
    response.send({
        kiss: 'here',
        from: ginger
    })
})
//when gingerkisses is visited, the functin triggers