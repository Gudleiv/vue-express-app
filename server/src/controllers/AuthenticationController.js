const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (e) {
            res.status(400).send({
                error: 'Этот E-Mail уже используется'
            })
        }
    },

    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                res.status(403).send({
                    error: 'Неккоректный запрос'
                })
            }

            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
               return res.status(403).send({
                    error: 'Неккоректный запрос 2'
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (e) {
            res.status(500).send({
                error: 'Неккоректный запрос 3',
                message: {e}
            })
        }
    }
}
