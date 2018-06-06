const db = require("../dataBase/db")

let doLogin = function (userData) {
    return new Promise((resolve, reject) => {
        var sql = "SELECT email from users where email='" + userData["email"] + "';"
        db.query(sql, function (err, result) {
            if (err) reject(err);
            //console.log(result)
            resolve(result)
        })
    })

}
module.exports = doLogin;