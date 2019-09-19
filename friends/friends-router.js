const express = require('express');
const db = require('./friends-helper.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.getAll()
        .then(response => {
            console.log(response)
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json(error);
        });
})


module.exports = router;