const BaseRepository = require('./base.repository')
const users = require('../Models/user.model')

class UsersRepository extends BaseRepository{
    constructor(){
        super(users)
    }
}

module.exports = UsersRepository