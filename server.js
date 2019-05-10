const express = require('express');

server = express();

server.use(express.static('client/dist'));

server.listen(3000, () => {
    console.log('listening at port 3000')
})