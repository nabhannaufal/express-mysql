import express from 'express';
import cors from 'cors';

import db from './database/db.js';
import movieRouter from './routes/movieRouter.js';

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

db.sync()
  .then(() => {
    console.log('Database connected!');
  })
  .catch((err) => {
    console.log('Failed to sync database', err);
  });

app.get('/api/ping', (req, res) => {
  res.json({ message: 'ping!' });
});

app.use('/api/movies', movieRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
