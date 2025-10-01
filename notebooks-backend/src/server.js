const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => res.json({ message:'Hello World!'}));

const port = process.env.PORT;

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});