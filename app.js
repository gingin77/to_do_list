const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
let packages = "";
let template = [];


const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

// let todoArray = ["Node basics", "Express basics","Mustache","HTML forms with Express", "about authentication", "how to connect to PostgreSQL", "how to create databases", "SQL", "how to connect to PostgreSQL from Node", "how to connect to use Sequelize"]
//
// for (let i=0; i < packages.length; i++){
//   let template = (`{"packages": "Learn " + todoArray[i]}`);
// }

//
// Template:
//
// {{#person?}}
//   Hi {{name}}!
// {{/person?}}
// Hash:
//
// {
//   "person?": { "name": "Jon" }
// }
// Output:
//
// Hi Jon!

// Mustache.render('<ul>{{#.}}<li>{{.}}</li>{{/.}}</ul>', ['foo','bar','baz']);

//Listening on root
app.get('/todo/', function (req, res){
  res.render('todo', {
       "option_1": {
              "completed": [
                {"packages": "Node basics"},
                {"packages": "Express basics"},
                {"packages": "Mustache"}
              ],
              "incomplete": [
                {"packages": "HTML forms with Express"},
                {"packages": "about authentication"},
                {"packages": "how to connect to PostgreSQL"},
                {"packages": "how to create databases"},
                {"packages": "SQL"},
                {"packages": "how to connect to PostgreSQL from Node"},
                {"packages": "how to connect to use Sequelize"}
              ]
          }
  })
});

app.get('/template', function(req, res){
  res.render('index', { name: 'Lila' } );
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
