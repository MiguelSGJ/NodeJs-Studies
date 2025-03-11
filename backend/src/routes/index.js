const router = require('express').Router()

router.get('/', (req, res) => {
    res.send({
        sucess: true,
        statusCode: 200,
        body: "Hello World!"
    })
})

module.exports = router;