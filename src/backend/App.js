import express from 'express'
import connectToMongo from './database.js';

const app = express();
const port = 5000;

connectToMongo()

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