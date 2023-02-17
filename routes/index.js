const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    res.render('index') // render and send
})

module.exports = router