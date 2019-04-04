const express = require('express');

const port = process.env.PORT;
const server = express();

server.get("/api/v1", (req, res, next) => {
    res.status(200).json({message: "n1!"});
});

server.get("/", (req, res, next) => {
    res.status(200).json({ message: req.url });
});

server.listen(port, () => { console.log('server started listening on port $`port`'); });