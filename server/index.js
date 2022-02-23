const express = require('express');

const app = express();
const SERVER_PORT = 3333

app.use(express.json())

app.use(express.static(`${__dirname}/../build`));

app.listen(SERVER_PORT, () => {
    console.log(`Server jamming on port ${SERVER_PORT}`)
})
