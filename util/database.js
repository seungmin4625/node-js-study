const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'qktod!23', {
  dialect: 'mysql',
  host: 'localhost',
  timezone: '+09:00',
  dialectOptions: {
    timezone: '+09:00',
  }
});

module.exports = sequelize;
