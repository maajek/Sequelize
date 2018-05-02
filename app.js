var Sequelize = require('sequelize');

var con = new Sequelize('null', 'null', 'null', {
    dialect: 'sqlite',
    storage: 'test.sqlite'
});

var Article = con.define('article', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    allowNull: false
});

con.sync().then(function () {
    Article.create( {
        title: 'test-1',
        body: 'some text here'
    });
});

con.sync().then(function () {
    Article.findAll().then( function (articles) {
        console.log("Numbers of records in the articles table:" + articles.length)
    });
});
