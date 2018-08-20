const express = require('express');

const server = express();

server.use(express.json());

const port = 3500;

server.listen(port, function() {
    console.log(`\n--- Web API Listening on http://localhost:${port} ---\n`);
})