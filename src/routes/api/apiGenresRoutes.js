
const express = require('express');
const router = express.Router();
const {list, detail}= require('../../controllers/api/apiGenresController');


router

.get('/', list)
.get('/:id', detail)

module.exports = router;