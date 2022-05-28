const express = require('express');
const router = express.Router();

let authRoutes = require('./authRoutes');

router.get('/', function(req, res) {
    const ready = {
        status: "Server is ready"
    }

    res.status(200).send(ready);
});

router.use('/auth', authRoutes);

module.exports = router;