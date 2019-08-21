const db = require('../database/db.js'); // => will this give me access to the various methods that I export? Or do I require in each individual piece??

/*
need to require in the database, so that the eventController functions
can perform CRUD operations on the database
*/

// retrieval based on input...
// retrieve by project name? because projects need to be unique...

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

function deleteProject (){
  // should find project in database, and delete it
}


module.exports = { createNewProject, getProject, updateProject, deleteProject };