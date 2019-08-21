const pg = require('pg');
// psql database name = projectsDatabase
const uri = 'postgres://gfleake:Romans81@localhost/projectsDatabase';

const pool = new pg.Pool({
 connectionString: uri,
});



module.exports.query = (text, values) => {
  console.log('query:', text, values)
  return pool.query(text, values)
};




// figure out why pg.connect isn't working correctly and how to export this module