var Sequelize = require('sequelize');

var config = require('../../config');

var sequelize = new Sequelize(config.database, config.login, config.pass, {
    dialect: config.dialect,
    port: config.port,
    storage: config.storage,
    logging: false
});

// Testing connect
sequelize.authenticate().then(function() {
    console.log('Connect to DB created!');
}, function(err) {
    console.log('Connection error: ' + err);
});

// All models
var tables = {};

// System tables
tables.admins = sequelize.define('_admins', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.TEXT,
    pass: Sequelize.TEXT,
    status: Sequelize.INTEGER,
    boards: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    active: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
});

for (var table in tables) {
    tables[table].sync().then(function(result) {
        console.log('Table ' + result.name + ' successfully synchronized');
    }, function(err) {
        console.log('Error: ' + err);
    });
};

module.exports = tables;