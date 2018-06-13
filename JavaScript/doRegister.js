const db = require("../dataBase/db");

let doRegister = function (userData) {
    return new Promise((resolve, reject) => {
        insertUserData(userData)
            .then(insertUsers.bind(null, userData))
            .then(getId.bind(null,userData.email))
            .then((data) => {
                resolve(JSON.stringify(data))
            })
            .catch((err) => {
                reject(err)
            })
    })
}



function insertUsers(userData, queryResult) {
    getId(userData.email)
        .then((id) => {
            sql = "INSERT INTO users (UserID,Email,Password) values (?,?,?)"
            db.query(sql, [id[0].ID, userData.email, userData.password], function (err, result, fields) {
                if (err) reject(err);
                console.log(result);
            });
        })

}

function insertUserData(userData) {
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO users_data (FirstName,LastName,Email,DateOfBirth,PhoneNumber) values (?,?,?,?,?)"
        db.query(sql, [userData.firstName, userData.lastName, userData.email, userData.birthday, userData.phoneNumber], function (err, result, fields) {
            if (err) reject(err);
            resolve(result)
        });
    })
}

function getId(email){
    return new Promise((resolve,reject)=>{
        let sql = "SELECT ID from users_data where email like ?"
        db.query(sql,[email], function (err, result) {
            if (err) reject(err);
            resolve(result)
        })
    })
}

module.exports = doRegister;