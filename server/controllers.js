const db = require('../database/db.js'); // => will this give me access to the various methods that I export? Or do I require in each individual piece??

/*
need to require in the database, so that the eventController functions
can perform CRUD operations on the database
*/

// retrieval based on input...
// retrieve by project name? because projects need to be unique...

function createNewProject (req, res){
// should create a new Table
  const testInput = req.body.tableName;

  db.query(`CREATE TABLE IF NOT EXISTS ${testInput}(name varchar)`, (err, result)=>{
    if (err) return (console.log('Error executing query: ', err));
    else {
      console.log('query result: ', result);
    }
  });

  res.status(200).send('query succesful');

}

function getProject (req, res){
  const testInput = req.body.tableName;
// should retrieve project from database, or whatever info is requested
  db.query(`SELECT * FROM ${testInput}`, (err, result)=>{
      if (err) return (console.log('Error executing query: ', err));
      else {
        console.log('query result: ', result);
      }
    });
    res.status(200).send('query succesful');
}

function updateProject (){
  // should find project in database, and update it
}

function deleteProject (){
  // should find project in database, and delete it
}


module.exports = { createNewProject, getProject, updateProject, deleteProject };