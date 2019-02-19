import * as App from 'express';

const weirdMiddleware = (req, res, next) => {
  req.boo = 'boo';
  next();
};

const app = App();
app.use(weirdMiddleware);
app.get('/', (req, res) => res.send(req.boo));

app.listen(8000, err => {
  if (err) {
    throw err;
  }
  console.log('cool stuff are happening on 8000');
  
});
