import express from 'express'
import cors from 'cors'
import connectToMongo from './db.js';
import blogRoutes from './routes/blogRoute.js';

const app = express();
const port = 5000;

connectToMongo()

app.use(cors())
app.use(express.json())

app.use('/addBlog',blogRoutes)

try {
    app.get('/', (req, res) => {
        res.send("Hello from server");
    })
    app.listen(port, () => {
        console.log(`App is listening at http://localhost:${port}`);
    })
} catch (error) {
    console.error('Failed to start server :', error.message());
}