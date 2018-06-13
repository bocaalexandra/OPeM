const db = require("../dataBase/db")

let creazaPetitie = (data) => {
    return new Promise((resolve, reject) => {
        let sql1 = "INSERT INTO petitions (UserID,Date,Title,Description) values (?,?,?,?)";
        let sql2 = "INSERT INTO details_petition (PetID,Destination,EndDate,FullDescription) values (?,?,?,?)"
        db.query(sql1, [data.userId,data.date,data.title,data.description], (err, result) => {
            if (err) reject(err)
            db.query(sql2,[result.insertId,data.destination,data.endDate,data.fullDescription],(err,data)=>{
                if(err) reject(err)
                resolve(JSON.stringify({
                    petitions : result.insertId,
                    details_petitions : data.insertId
                }))
            })
        })
    })
}


let deletePetitie = (data) => {
    return new Promise((resolve, reject) => {
        let sql = "DELETE FROM petitions where PetitionID = ?";
        db.query(sql, [data.petitionId], (err, result) => {
            if (err) reject(err)
            resolve(JSON.stringify({
                message:succes
            }))
        })
    })
}

let getPetitie = (data) => {
    return new Promise((resolve, reject) => {
        let sql = "select a.PetitionID,a.userID,a.Date,a.title,a.Description,b.Destination,b.EndDate,b.FullDescription from petitions as a join details_petition as b WHERE a.PetitionID =? and b.PetID = ?";
        db.query(sql, [data.petitieId,data.petitieId], (err, result) => {
            if (err) reject(err)
            resolve(JSON.stringify(result))
        })
    })
}

let semneazaPetitie = (data) => {
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO signature (PetID,UserID,Date,Location) Values (?,?,?,?)";
        db.query(sql, [data.petitionId,data.userId,data.date,data.location], (err, result) => {
            if (err) reject(err)
            resolve(JSON.stringify({signatureId : result.insertId }))
        })
    })
}


module.exports = {
    creazaPetitie,
    deletePetitie,
    getPetitie,
    semneazaPetitie
}