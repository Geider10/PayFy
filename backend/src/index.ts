import express from 'express';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/test', (_req, res) => {
    res.send("Hello world");
})
app.listen(PORT, () => {
    console.log("server on port" , PORT);
})
