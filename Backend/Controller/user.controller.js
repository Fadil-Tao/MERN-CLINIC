const BaseController = require('./base.controller')
const UsersRepository = require('../Repository/user.repository')


class UsersController extends BaseController{
    constructor(){
        super(UsersRepository)
    }
}

module.exports = UsersController