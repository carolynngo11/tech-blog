const router = require('express').Router()

router.get('/', async (req, res) => {
    try {
        if (!req.session.logged_in) {
            return res.redirect('/api/users/login')
        }
        res.redirect('/api/dashboard')
    } catch (err) {
        res.json(err)
    }
})

module.exports = router;