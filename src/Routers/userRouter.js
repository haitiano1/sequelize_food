const express = require('express');
const { likeRes, unlikeRes, userLikeRes, addRate, userRateRes, addOrder } = require('../Controllers/userController');
const userRouter = express.Router();

userRouter.get('/like', likeRes)
userRouter.delete('/unlike', unlikeRes)
userRouter.get('/like-rest/:user_id', userLikeRes)
userRouter.post('/add-rate', addRate)
userRouter.get('/rate-res/:user_id', userRateRes)
userRouter.post('/add-order', addOrder)

module.exports = userRouter;