var
  express = require('express'),
  userRouter = express.Router(),
  userCtrl = require('../controllers/users.js')

userRouter.route('/')
  .get(userCtrl.index)
  .post(userCtrl.create)

userRouter.route('/:id')
  .get(userCtrl.show)
  .patch(userCtrl.update)
  .delete(userCtrl.destroy)

// All business routes here

module.exports = userRouter
