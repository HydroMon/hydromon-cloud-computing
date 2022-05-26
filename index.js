const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const indexRouter = require('./routes/index');

const port = process.env.PORT || 3000;

function main() {
    const app = express();

    app.use(express.json());
    app.use(indexRouter);

    app.listen(port, () => {
        console.log("Server is listening on port ", port);
    });
}

main();