const 
    express    = require('express'),
    controller = require('../controllers/indexController'),
    router     = express.Router();

router.all('/', controller.actionIndex);

module.exports = router;