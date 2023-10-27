import express from 'express';

const app = express()

app.get('/', (req, res) => {
  res.send('Hello teste');
});

app.get('/user/:name/lastname/:lastname', (req, res) => {
  res.send({
    name: req.params.name,
    lastname: req.params.lastname,
  });
});

app.listen(8080, () => {
  console.log('Server is running...');
});
