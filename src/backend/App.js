import express from 'express';
import cors from 'cors';
import connectToMongo from './db.js';
import blogRoutes from './routes/blogRoute.js';

const app = express();
const port = 5000;

connectToMongo();

app.use(cors());
app.use(express.json()); 

app.use('/api/blog', blogRoutes);
app.use('/upload',express.static('upload'))

app.get('/', (req, res) => {
  res.json({ message: "Server is working!" });
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
