const express = require('express');
const router = express.Router();

let authRoutes = require('./authRoutes');
let hidroponikRoutes = require('./hidroponikRoutes');
let dataHidroponikRoutes = require('./dataHidroponikRoutes');
let userRoutes = require('./userRoutes');

router.get('/', function(req, res) {
    const ready = {
        status: "Server is ready"
    }

    res.status(200).send(ready);
});

router.use('/auth', authRoutes);
router.use('/hidroponik', hidroponikRoutes);
router.use('/data', dataHidroponikRoutes);
router.use('/user', userRoutes);

module.exports = router;