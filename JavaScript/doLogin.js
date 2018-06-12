const db = require("../dataBase/db")

let doLogin = function (userData) {
    return new Promise((resolve, reject) => {
        //var sql = 'SELECT id from users where email=?' + userData["email"] + "' and password = ';"
        let sql = 'SELECT userID from users where email=? and password=?'
        db.query(sql,[userData.email,userData.password], function (err, result) {
            if (err) reject(err);
            resolve(JSON.stringify(result))
        })
    })

}
module.exports = doLogin;