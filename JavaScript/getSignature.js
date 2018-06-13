const db = require("../dataBase/db")

function getSignature(){
    return new Promise((resolve, reject) => {
        let sql = "SELECT u.FirstName,u.LastName,s.Date,s.Location from users_data as u join signatures as s where u.ID=s.UserID";
        db.query(sql,(err,result)=>{
            if(err) reject(err)
            console.log(result)
            resolve(JSON.stringify(result))
        })
    })
}

module.exports = getSignature;