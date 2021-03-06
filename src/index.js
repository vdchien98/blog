const path = require('path');
const express = require('express'); //'express' là thư viện vừa cài  còn  express chính là 1 function
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');

//conect DB

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.use(methodOverride('_method'));

//app.use(morgan('combined'))
//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

// route tuyến đường đi vào trang chủ

route(app);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
