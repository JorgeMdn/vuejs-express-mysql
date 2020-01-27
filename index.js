// SERVER

// IMPORT DEPENDENCIES
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// INITIALITATIONS
const app = express();

// SETTINGS
app.set('port', process.env.PORT || 4000); //Si existe un puerto en el sistema tomalo si no usa el 400
// MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
// GLOBAL VARIABLES

// ROUTES


app.get('/', (req, res) => {
    res.send({
        message: 'Behold The MEVN Stack!'
    });
});


// PUBLIC


// STARTING THE SERVER
app.listen(app.get('port'), () => {
    console.log(`listening on ${app.get('port')}`);
});