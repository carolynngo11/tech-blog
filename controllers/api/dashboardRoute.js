const router = require('express').Router()
const { Dashboard } = require('../../models')
const withAuth = require('../../utils/auth')

router.post('/add', async (req, res) => {
    try {
        const newPost = await Dashboard.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.json(newPost)

    } catch (err) {
        res.json(err)
    }
})

module.exports = router