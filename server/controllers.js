const db = require('../database/db.js'); 


function createNewProject (req, res){
// should create a new Table
  const projectName = req.body.projectName.toLowerCase();
  const clientEmail = req.body.clientEmail.toLowerCase();
  const projectDescription = req.body.projectDescription.toLowerCase();
  const insertText = 'INSERT INTO projects (projectName, clientEmail, projectDescription) VALUES($1, $2, $3) RETURNING *';
  const values = [projectName, clientEmail, projectDescription];

  db.query(insertText, values, (err, result) => {
    if (err) {
      console.log('Error executing query: ', err);
      return res.status(500).send(err);
    }
    else {
      console.log('leaving db.query inside addRowIfExists');
      return res.status(200).send('row succesfully added to database');
    }
  });
}
      


function getProject (req, res){
  const projectName = req.body.projectName.toLowerCase();
  const text = `SELECT * FROM projects WHERE projectName='${projectName}'`;
  db.query(text, (err, result)=>{
    if (err) {
      console.log('Error executing query: ', err);
      return res.status(500).send(err);
    }
    else {
      const searchResults = result.rows;
      console.log('searchResults: ', searchResults);
      return res.status(200).send(searchResults);
    }
  });
}

function allProjects (req, res) {
// return a list of all projects
  const text = `SELECT * FROM projects`;
  db.query(text, (err, result)=>{
    if (err) {
      console.log('Error executing query: ', err);
      return res.status(500).send(err);
    }
    else {
      const searchResults = result.rows;
      console.log('searchResults: ', searchResults);
      return res.status(200).send(searchResults);
    }
  });
}

function allClients (req, res) {
// return a list of all clients
  const text = `SELECT * FROM clients`;
  db.query(text, (err, result)=>{
    if (err) {
      console.log('Error executing query: ', err);
      return res.status(500).send(err);
    }
    else {
      const searchResults = result.rows;
      console.log('searchResults: ', searchResults);
      return res.status(200).send(searchResults);
    }
  });
}

function allClientProjects (req, res){
  // returns a list of all projects for specified client
  // const clientName = req.body.clientName;
  const clientEmail = req.body.clientEmail;
  const values = [clientEmail];

  const text = `SELECT projects.projectName, projects.projectDescription, clients.clientEmail FROM projects INNER JOIN clients ON clients.clientEmail=projects.clientEmail WHERE projects.clientEmail=$1`;
 // currently this is returning ALL PROJECTS FROM ALL CLIENT E-MAILS. Need to tweak it so it only returns client projects associated with a specific client e-mail
  db.query(text, values, (err, result)=>{
    if (err) {
      console.log('Error executing query: ', err);
      return res.status(500).send(err);
    }
    else {
      const searchResults = result.rows;
      console.log('searchResults: ', searchResults);
      return res.status(200).send(searchResults);
    }
  });

}

function updateProject (req, res){
  const updateInfo = req.body.projectDescription.toLowerCase();
  const projName = req.body.projectName.toLowerCase();
  const text = `UPDATE projects SET projectDescription='${updateInfo}' WHERE projectName='${projName}'`;

  db.query(text, (err, result)=>{
    if (err) {
      console.log('Error executing query: ', err);
      return res.status(500).send(err);
    }
    else {
      console.log(result);
      return res.status(200).send('Project information updated successfully.');
    }
  });
}

function deleteProject (req, res){
  // should find project in database, and delete it
  const projName = req.body.projectName.toLowerCase();
  const text = `DELETE FROM projects WHERE projectName='${projName}'`;
  db.query(text, (err, result)=>{
    if (err) {
      console.log('Error executing query: ', err);
      return res.status(500).send(err);
    }
    else {
      console.log(result);
      return res.status(200).send('Project deleted from database.');
    }
  });
}


module.exports = { createNewProject, getProject, updateProject, deleteProject, allClientProjects, allProjects, allClients };