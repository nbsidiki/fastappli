const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server, Socket } = require("socket.io");
const io = new Server(server);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
   });
 
   
  
//app.get('/', (req, res) => {

//res.send("HELLO WORLD");
//});
//const Joi = require('joi');



app.get('/1', function (req, res) {
    res.sendFile('index1.html', { root: __dirname })
 })
 app.get('/2', function (req, res) {
    res.sendFile('index2.html', { root: __dirname })
 })


 
 // établissement de la connexion
 io.on('connection', (socket) =>{
    console.log(`Connecté au client ${socket.id}`)
 })
 app.post('/api/posts', (req, res) => {
    console.log(req.body.posted_data.text);
    io.emit('news', req.body.posted_data.text);
   res.send(`${req.body.posted_data.text}`);
   //let posted_data = req.body.posted_data.text;   
});
server.listen(3000, () => {
    console.log('listening on *:3000');
  });