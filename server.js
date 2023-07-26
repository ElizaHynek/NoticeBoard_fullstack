const express = require('express');
const cors = require('cors');
const path = require('path');
//const hbs = require('express-handlebars');
//const passport = require('passport');
//const session = require('express-session');
//const passportConfig = require('./config/passport');
const mongoose = require('mongoose');
//const connectToDB = require('./db');

const app = express();

// set handlebars as view engine
//app.engine('hbs', hbs({ extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'main' }));
//app.set('view engine', '.hbs');

// init session mechanism
//app.use(session({ secret: 'anything' }));

// init passport
//app.use(passport.initialize());
//app.use(passport.session());

//connectToDB();

// standard middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/client/build')));

app.use('/api', require('./routes/ads.routes'));
app.use('/api', require('./routes/user.routes'));
app.use('/auth', require('./routes/auth.routes'));

app.get('*', (req, res) => {
  res.sendFile((path.join(__dirname, '/client/build/index.html')));
});

app.use('/', (req, res) => {
  res.status(404).render('notFound');
});

const NODE_ENV = process.env.NODE_ENV;
let dbUri = '';

if(NODE_ENV === 'production') dbUri = 'url to remote db';
else dbUri = 'mongodb://localhost:27017/adsDB';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;


db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));


const server = app.listen('8000', () => {
  console.log('Server is running on port: 8000');
});
