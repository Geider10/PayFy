import express from 'express';

const app = express();
app.use(express.json());

app.get('/test', (_req, res) => {
    res.send("Hello world");
})

export default app;