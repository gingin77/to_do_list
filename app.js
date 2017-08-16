const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');


const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res){
  res.render('todo', {
    "option_1": [
      {"packages": "Node basics"},
      {"packages": "Express basics"},
      {"packages": "Mustache"},

      {"packages": "HTML forms with Express"},
      {"packages": "about authentication"},
      {"packages": "how to connect to PostgreSQL"},
      {"packages": "how to create databases"},
      {"packages": "SQL"},
      {"packages": "how to connect to PostgreSQL from Node"},
      {"packages": "how to connect to use Sequelize"},
    ]
  })
});

app.get('/template', function(req, res){
  res.render('index', { name: 'Lila' } );
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
