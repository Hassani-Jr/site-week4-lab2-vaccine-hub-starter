const {  UnauthorizedError} = require('../utils/errors')


class User{
    static async login(credentials){




        throw new UnauthorizedError("Invalid email or password")
    }

    static async register(credentials){




        
    }
}

 module.exports = User