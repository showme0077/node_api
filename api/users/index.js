const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./user.controller');
const router = express.Router();



router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', controller.index);
router.get('/:id', controller.show);
router.delete('/:id', controller.destroy);
router.post('/', controller.create);


module.exports = router;