const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
const server = http.createServer(app);
const controllers = require('./controllers.js');

// create controllers to handle requests
// stretch: create a log in that adds cookies

app.get('/getProject', controllers.getProject);

app.post('/newProject', controllers.createNewProject);

app.put('/updateProject', controllers.updateProject);

app.delete('/deleteProject', controllers.deleteProject);

server.listen(port, ()=>{
  console.log(`server listening on port ${port}`);
});

module.exports = server;