const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))

async function hashPassword (user, options) {
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return null
    }

    const hash = await bcrypt.hash(user.password, SALT_FACTOR);
    user.setDataValue('password', hash);

    return null
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = function (password) {
        return bcrypt.compare(password, this.password)
    }

    return User
}