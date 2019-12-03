const server = require('./api/server.js');

const port = 4001;

server.listen(4001, () => {
    console.log(`Server Running on http://localhost:${port}`);
});