const express = require('express');
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);

app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});
