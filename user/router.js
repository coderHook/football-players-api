const userRouter = require('./router')
const { Router } =require('express')
const User = require('./model')
const bcrypt = require('bcrypt')

const router = new Router();

router.post('/user', (req, res, next) => {
  const user_enc = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  }

  User.create(user_enc)
    .then(user => res.status(200).send(user))
    .catch(err => res.status(500).send(err))
})

module.exports = router