const express = require('express');

const port = process.env.PORT || 3000;
const server = express();

server.get("/myapi2/api/v1", (req, res, next) => {
    res.status(200).json({message: "n1!"});
});

server.get("/myapi2/", (req, res, next) => {
    res.status(200).json({ message: req.url });
});

server.get("/", (req, res, next) => {
    res.status(200).json({ message: "not going to happen"});
});

server.listen(port, () => { console.log(`server started listening on port ${port}`); });