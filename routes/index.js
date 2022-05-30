const express = require('express');
const router = express.Router();

let authRoutes = require('./authRoutes');
let dataHidroponikRoutes = require('./dataHidroponikRoutes');
let userRoutes = require('./userRoutes');

router.get('/', function(req, res) {
    const ready = {
        status: "Server is ready"
    }

    res.status(200).send(ready);
});

router.use('/auth', authRoutes);
router.use('/data', dataHidroponikRoutes);
router.use('/user', userRoutes);

module.exports = router;