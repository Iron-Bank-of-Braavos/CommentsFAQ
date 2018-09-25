const route = require('express').Router();
const {db} = require('../db/connect.js');
// const {schema} = require('../db/schema.js');
const _ = require('underscore');

route.get('/comments', (req, res)=>{
  let rando = Math.floor(Math.random() * 70) + 15

  db.query(`select message_id, message, name, parent_id from messages
                where message_id<${rando+15} and message_id>=${rando-15}`)
    .then((data)=>{
      res.send(data[0]);
    })
    .catch((err)=>{
      if(err) {
        res.send('ok');
      }
    });

})

module.exports = {
  route
}
