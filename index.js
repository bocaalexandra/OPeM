const http = require("http")
const fs = require("fs");
const path = require("path");

let doLogin = require("./JavaScript/doLogin")
let doRegister = require("./JavaScript/doRegister")
let { creazaPetitie, deletePetitie, getPetitie, semneazaPetitie } = require("./JavaScript/petitieUtiliti")
let { ordonateResult } = require("./JavaScript/ordonateResult")
let getSignature  = require("./JavaScript/getSignature")

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        //HERE WE GONNA TREAT METHOD 'GET'
        try {
            //LOAD CSS FILE
            if (req.url.match(/.css$/)) {
                let cssPath = path.join(__dirname, ".", req.url);
                let cssReadStream = fs.createReadStream(cssPath, "UTF-8");
                res.status = 200;
                res.setHeader("Content-Type", "text/css");

                cssReadStream.pipe(res);
            }

            //LOAD JS FILE
            if (req.url.match(/.js$/)) {
                let jsPath = path.join(__dirname, "", req.url);
                let jsReadStream = fs.createReadStream(jsPath, "UTF-8");
                res.status = 200;
                res.setHeader("Content-Type", "application/javascript");

                jsReadStream.pipe(res);
            }

            if (req.url === "/") {
                //GET HOME PAGE
                make_get_for_pages(res, "home.html")
            }
            else if (req.url === "/login.html") {
                //GET LOGIN PAGE
                make_get_for_pages(res, "./PagesHTML/login.html")
            }
            else if (req.url === "/register.html") {
                //GET REGISTER PAGE
                make_get_for_pages(res, "./PagesHTML/register.html")
            }
            else if (req.url === "/creazaPetitie.html") {
                //GET CREATE PETITIE PAGE
                make_get_for_pages(res, "./PagesHTML/petitie.html")
            }
            else if (req.url === "/ajutor.html") {
                //GET AJUTOR PAGE
                make_get_for_pages(res, "./PagesHTML/ajutor.html")
            }
            else if (req.url === "/despre.html") {
                //GET DESPRE PAGE
                make_get_for_pages(res, "./PagesHTML/despre.html")
            }
        }
        catch (err) {
            res.end("err");
        }

    }
    else if (req.method === "POST") {
        if (req.url === "/login") {
            get_data(req)
                .then(doLogin)
                .then(sendResponse.bind(null, res))
                .catch((err) => { console.log(err) })

        }
        else if (req.url === "/register") {
            get_data(req)
                .then(doRegister)
                .then(sendResponse.bind(null, res))
                .catch((err) => { console.log(err) })
        }
        else if (req.url === "/creazaPetitie") {
            get_data(req)
                .then(creazaPetitie)
                .then(sendResponse.bind(null, res))
                .catch((err) => { console.log(err) })
        }
        else if (req.url === "/deletePetitie") {
            get_data(req)
                .then(deletePetitie)
                .then(sendResponse.bind(null, res))
                .catch((err) => { console.log(err) })
        }
        else if (req.url === "/getPetitie") {
            get_data(req)
                .then(getPetitie)
                .then(sendResponse.bind(null, res))
                .catch((err) => { console.log(err) })
        }
        else if (req.url === "/semneazaPetitie") {
            get_data(req)
                .then(semneazaPetitie)
                .then(sendResponse.bind(null, res))
                .catch((err) => { console.log(err) })
        }
        else if (req.url === "/ordine") {
            get_data(req)
                .then(ordonateResult)
                .then(sendResponse.bind(null, res))
                .catch((err) => { console.log(err) })
        } else if (req.url === "/getSignature") {
            console.log(getSignature)
            get_data(req)
                .then(getSignature)
                .then(sendResponse.bind(null, res))
                .catch((err) => { console.log(err) })
        }
    }
});


server.listen(port, hostname, () => {
    console.log("Node server runing at localhost:3000")
});


function get_data(req) {
    let data = "";
    return new Promise((resolve, reject) => {
        req.on('data', (chunk) => {
            data += chunk;
        })
        req.on('end', () => {
            resolve(JSON.parse(data));
        })
        req.on('error', () => {
            reject();
        })
    })
}


function make_get_for_pages(res, path) {
    fs.readFile(path, "UTF-8", (err, html) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(html);
    })
}


function sendResponse(res, data) {
    if (data.length === 0) {
        console.log(data)
        res.statusCode = 404
        res.setHeader("Content-type", "text/plain")
        let output = JSON.stringify({
            response: "fail"
        })
        res.end(output)
    }
    else {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain")
        console.log(data)
        let output = JSON.stringify({
            response: "succes",
            message: JSON.parse(data)
        })
        res.end(output)
    }
}