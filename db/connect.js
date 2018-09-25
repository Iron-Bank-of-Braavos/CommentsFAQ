const Sequelize = require('sequelize');
const db = new Sequelize('fvc', 'postgres', 'pw', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
})

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  db
}
