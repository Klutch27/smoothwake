const db = require('../database/db.js'); // => will this give me access to the various methods that I export? Or do I require in each individual piece??

/*
need to require in the database, so that the eventController functions
can perform CRUD operations on the database
*/

// retrieval based on input...
// retrieve by project name? because projects need to be unique...

function createNewProject (){
// should create a new Table
  const testInput = 'BonesBrigade';

  db.query(`CREATE TABLE IF NOT EXISTS ${testInput}(name varchar)`, (err, result)=>{
    if (err) return (console.log('Error executing query: ', err));
    else {
      console.log('query result: ', result);
    }
  });
}

function getProject (){
// should retrieve project from database, or whatever info is requested
}

function updateProject (){
  // should find project in database, and update it
}

function deleteProject (){
  // should find project in database, and delete it
}


module.exports = { createNewProject, getProject, updateProject, deleteProject };