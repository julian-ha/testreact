const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const path = require('path');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});
app.get('/', (req, res) => {
   res.sendFile(path.resolve(__dirname, '../build/index.html',));
});

app.get('*', (req,res) =>{
    res.sendFile(path.j(__dirname+'/build/index.html'));
});



app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);