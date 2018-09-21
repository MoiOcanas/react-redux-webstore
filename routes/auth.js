
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()

router.post('/register', (req, res) => {

    turbo.createUser(req.body)
        .then(data => {
            req.vertexSession.user = { id: data.id }
            res.redirect('/')
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                data: err.message
            })
        })
})

router.get('/currentuser', (req, res) => {
    if (req.vertexSession == null) {
        res.json({
            confirmation: 'sucess',
            user: null
        })
        return
    }

    if (req.vertexSession.user == null) {
        res.json({
            confirmation: 'sucess',
            user: null
        })
        return
    }

    turbo.fetchOne('user', req.vertexSession.user.id)
        .then(data => {
            res.json({
                confirmation: 'sucess',
                user: data
            })
        })
        .catch(err => {
            res.json({
                confirmation: 'fail',
                user: err.message
            })
        })
})

module.exports = router