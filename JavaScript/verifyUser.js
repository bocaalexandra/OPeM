const db = require("../dataBase/db")


function autorizareUtilizator(user) {
    return new Promise((resolve, reject) => {
        let sql = "";
        db.query(sql,(err,result)=>{
            if(err) reject(err)
            resolve(JSON.stringify(result))
        })
    })
}

function checkLogin(user) {
    return new Promise((resolve, reject) => {

    })
}


module.exports = {
    autorizareUtilizator,
    checkLogin
}