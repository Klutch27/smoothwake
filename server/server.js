const express = require('express');
const app = express();
// const http = require('http');
const port = 3000;
// const server = http.createServer(app);
const controllers = require('./controllers.js');
const bodyparser = require('body-parser');
const path = require('path');

// create controllers to handle requests
// stretch: create a log in that adds cookies

app.all('*', bodyparser.urlencoded({
  extended: true
}));

app.all('*', bodyparser.json());

app.all('/', (req, res)=>{
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.all('/style.css', (req, res)=>{
  res.status(200).sendFile(path.join(__dirname, '../client/styles.css'));
});

app.get('/getProject', controllers.getProject);

app.get('/allProjects', controllers.allProjects);

app.get('/allClients', controllers.allClients);

app.get('/allClientProjects', controllers.allClientProjects);

app.post('/newProject', controllers.createNewProject);

app.patch('/updateProject', controllers.updateProject);

app.delete('/deleteProject', controllers.deleteProject);

app.listen(port, ()=>{
  console.log(`server listening on port ${port}`);
});

module.exports = app;