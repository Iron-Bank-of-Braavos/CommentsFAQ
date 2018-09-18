const {db} = require('./connect.js');
const Sequelize = require('sequelize');
const messages = require('../data.json');
const fs = require('fs');

const Messages = db.define('messages', {
  message_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  message: { type: Sequelize.TEXT, allowNull: false},
  created_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  parent_id: { type: Sequelize.INTEGER, allowNull: true },
  name: { type: Sequelize.STRING, allowNull: false}
});

module.exports = {
  Messages
}
