const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(_, res) {
    res.send('HOME');
});

app.get('/message', function(_, res) {
    res.send('Asistencia 02/03/21');
});

app.listen(3000, () => console.log('Listening on port 3000'));

module.exports = app;