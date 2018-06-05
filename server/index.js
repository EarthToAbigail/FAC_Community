require('env2')('.env');
const express = require('express');
const logger = require('morgan');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 4444;
const host = process.env.HOST || 'localhost';

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SECRET],
    name: 'fac'
  })
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
} else {
  app.get('/', (req, res) => {
    res.send('This is the home page');
  });
  app.get('*', (req, res) => {
    res.status(404).send("sorry, can't find what you are looking for...");
  });
}

app.listen(port, () => {
  console.log(`The magic happens on port ${host}:${port}`);
});
