const mongoose = require('mongoose');
const morgan = require('morgan');
const app = require('./app');

// CONNECT TO DATABASE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected✍️');
  });

// RUN SERVER
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port : ${port}✅`);
});
