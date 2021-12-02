const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

//use middleware xử lý dữ liệu từ form submit lên
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.use(methodOverride('_method')); // thư viện này giúp nhận phương thức Put vì mặc định form nhận get, post

//Http Logger
app.use(morgan('combined')); //morgan dùng để log các request trên browser

//Template Engine giup viêt file chứa mã html ở nơi khác chia layout
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a,b) => a + b, // giúp tăng chỉ mục của index ở /me/stored/coureses
  }
  }),
); // dinh nghia hendlebar

app.set('view engine', 'hbs'); // set view engine dua tren handlebars
app.set('views', path.join(__dirname, 'resources/views'));

//Route Init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
