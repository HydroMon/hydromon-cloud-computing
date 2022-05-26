const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    const ready = {
        status: "Server is ready"
    }

    res.status(200).send(ready);
});

module.exports = router;