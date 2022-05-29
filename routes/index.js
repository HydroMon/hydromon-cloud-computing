const express = require('express');
const router = express.Router();

let authRoutes = require('./authRoutes');
let hidroponikRoutes = require('./hidroponikRoutes');

router.get('/', function(req, res) {
    const ready = {
        status: "Server is ready"
    }

    res.status(200).send(ready);
});

router.use('/auth', authRoutes);
router.use('/hidroponik', hidroponikRoutes);

module.exports = router;