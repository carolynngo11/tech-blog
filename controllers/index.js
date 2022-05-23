const router = require('express').Router();
const apiRoute = require('./api');
const homeRoute = require('./homeRoute');
const withAuth = require('../utils/auth');

router.use('/', homeRoute);
router.use('/api', apiRoute);

router.get('*', withAuth, async (req, res) => {
    res.redirect('/api/dashboard')
})

module.exports = router;