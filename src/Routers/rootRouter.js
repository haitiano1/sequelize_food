const express = require('express');
const { likeRes } = require('../Controllers/userController');

const rootRouter = express.Router();
rootRouter.use("/user", likeRes);

module.exports = rootRouter;