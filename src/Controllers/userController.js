// const { Sequelize } = require('sequelize')
const sequelize = require('../Models/index')
const initModel = require('../Models/init-models');
const { successCode, failCode } = require('../ultils/response')
const models = initModel(sequelize)

const likeRes = async (req, res) => {
    try {
        await models.like_res.create(req.body)
        successCode(res, req.body)
    } catch (error) {
        failCode(res)
    }
}
const unlikeRes = async (req, res) => {
    try {
        const { user_id, res_id, date_like } = req.body
        await models.like_res.destroy({
            date_like, where: {
                user_id,
                res_id
            }
        })
        successCode(res, req.body)
    } catch (error) {
        failCode(res)
    }
}

const userLikeRes = async (req, res) => {
    try {
        const { user_id } = req.params
        const data = await models.user.findAll({
            include: ['user_res_like'],
            where: {
                user_id
            }

        })
        successCode(res, data)
    } catch (error) {
        failCode(res)
    }
}

const addRate = async (req, res) => {
    try {
        const { user_id, res_id } = req.body
        let data = await models.rate_res.findOne({
            where: {
                user_id,
                res_id
            }
        })
        data ? successCode(res, 'data đã tồn tại') : await models.rate_res.create(req.body) && successCode(res, req.body)


    } catch (error) {
        failCode(res)
    }
}

const userRateRes = async (req, res) => {
    try {
        const { user_id } = req.params
        let data = await models.user.findAll({
            include: ['res_id_restaurant_rate_res'],
            where: {
                user_id
            }
        })
        successCode(res, data)
    } catch (error) {
        failCode(res)
    }
}

const addOrder = async (req, res) => {
    try {
        await models.order.create(req.body)
        successCode(res, req.body)
    } catch (error) {
        failCode(res)
    }
}

module.exports = {
    likeRes, unlikeRes, userLikeRes, addRate, userRateRes, addOrder
}