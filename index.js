const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello postgers');
});

app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});
