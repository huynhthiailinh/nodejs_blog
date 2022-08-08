const path = require('path');

const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

const route = require('./routes');

route(app);

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
