const {sign} = require('jsonwebtoken');

const createAccessToken = (userId) => {
    return sign({userId} , process.env.ACCESS_TOKEN, {expiresIn: '20m'})
}

const createRefreshToken = (userId) => {
    return sign({userId} , process.env.REFRESH_TOKEN, {expiresIn: '5d'})
}
const sendAccess = (req, res, accessToken) => {
    res.send({
        accessToken,
        login: req.body.login
    })
}

const sendRefresh = (req, res, token) => {
    res.cookie('refreshtoken', token, {httpOnly: true, path: '/refresh_token'})
}

module.exports = {createAccessToken, createRefreshToken, sendAccess, sendRefresh}