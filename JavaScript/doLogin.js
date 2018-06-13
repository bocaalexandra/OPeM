const db = require("../dataBase/db")

let doLogin = function (userData) {
    return new Promise((resolve, reject) => {
        let sql = 'SELECT userID from users where email=? and password=?'
        db.query(sql,[userData.email,userData.password], function (err, result) {
            if (err) reject(err);
            resolve(JSON.stringify(result))
        })
    })

}
module.exports = doLogin;