const db = require("../dataBase/db")

let ordonateResult = (data) => {
    return new Promise((resolve, reject) => {
        if (data.what === "petitiiPopulare") {
            petitiiPopulare()
                .then(result => {
                    resolve(result)
                })
        } else if (data.what === "petitiiRecente") {
            petitiiRecente()
                .then(result => {
                    resolve(result)
                })
        } else if (data.what === "petitiiSemnate") {
            petitiiSemnate(data.userId)
                .then(result => {
                    resolve(result)
                })
        } else if (data.what === "search") {
            search(data.searchText)
                .then(result => {
                    resolve(result)
                });
        } else if (data.what === "all") {
            getAll()
                .then(result => {
                    resolve(result)
                })
        }
    })
}

function petitiiPopulare() {
    return new Promise((resolve, reject) => {
        let sql = "SELECT s.PetID,s.UserID,s.Date,s.Location,p.Title FROM `signatures` AS s join petitions as p where p.PetitionID = s.PetID GROUP BY s.PetID order by COUNT(s.PetID) DESC";
        db.query(sql,(err,result)=>{
            if(err) reject(err)
            resolve(JSON.stringify(result))
        })
    })
}

function petitiiRecente() {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM `petitions` ORDER by Date DESC";
        db.query(sql,(err,result)=>{
            if(err) reject(err)
            resolve(JSON.stringify(result))
        })
    })
}

function petitiiSemnate(id) {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * from petitions as p join signatures as s WHERE s.PetID = p.PetitionID and s.UserID=?";
        db.query(sql,[id],(err,result)=>{
            if(err) reject(err)
            resolve(JSON.stringify(result))
        })
    })
}

function search(text) {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM petitions where Description like '%"+text+"%' or Title like '%"+text+"%'";
        db.query(sql,[text],(err,result)=>{
            if(err) reject(err)
            resolve(JSON.stringify(result))
        })
    })
}

function getAll() {
    return new Promise((resolve, reject) => {
        let sql = "select * from petitions";
        db.query(sql,(err,result)=>{
            if(err) reject(err)
            console.log(result)
            resolve(JSON.stringify(result))
        })
    })
}

module.exports = {
    ordonateResult
}