const json = require('./data.json');
const db = require('./db/schema.js');

json.forEach(item => {
  db.Messages.sync({ force: false }).then(() => {
    db.Messages.bulkCreate([item]).then(() => {
      console.log('Added data to the database!');
    });
  });
});
