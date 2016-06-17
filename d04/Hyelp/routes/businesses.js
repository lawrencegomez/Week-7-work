var
  express = require('express'),
  businessRouter = express.Router(),
  businessCtrl = require('../controllers/businesses.js')


// This goes to the business controller and performs the index function in there
// businessRouter.get('/', businessCtrl.index)


businessRouter.route('/')
  .get(businessCtrl.index)
  .post(businessCtrl.create)

businessRouter.route('/:id')
  .get(businessCtrl.show)
  .patch(businessCtrl.update)
  .delete(businessCtrl.destroy)

// All business routes here

module.exports = businessRouter
