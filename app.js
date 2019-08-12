const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();
const port = 3000;

//Database Connection
mongoose.connect(config.database, { useNewUrlParser: true });

//On connection
mongoose.connection.on('connected', () =>{ 
    console.log('Connected to database ' + config.database);
});

//On connection
mongoose.connection.on('error', (err) =>{ 
    console.log('Database error: ' + err);
});

//Instantiating User from the route folder
const users = require("./routes/users");

//Instantiating Supplier from the route folder
const suppliers = require("./routes/suppliers");

//Cors middleware
app.use(cors());

//Body Parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//User middleware configuration
app.use('/users', users);

//User middleware configuration
app.use('/suppliers', suppliers);

//Index Route
app.get('/', (req, res) =>{
    res.send('invalid endpoint');
});

//Static folder
app.use(express.static(path.join(__dirname, 'public')));

//Start Server  
app.listen(port, ()=>{
    console.log('Server started on port ' +port);
});