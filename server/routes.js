var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/Togos', controller.Togos.get);

router.post('/Togos', controller.Togos.post);

module.exports = router;
