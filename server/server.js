const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "localhost";
const port = 3001

const server = http.createServer((req,res)=>{

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
            res.end(JSON.stringify({
                status : 500,
                "message" : "something wrong happend,please contact administrator of the site"
            }));
        }

    }else if(req.method === "POST"){
        if (req.url === "/login") {
            get_data(req)
                .then(doLogin)
                .then(sendResponse.bind(null, res))
                .catch((err) => { console.log(err) })

        }
        if(req.url === "/homeLogged"){
            get_data(req)
                .then(checkUserAuthentification)
                .then(make_get_for_pages.bind(null,resl,"../afterLogin/homeL.html"))
                .catch((err)=>{
                    res.end(JSON.stringify({
                        status : 404,
                        message: "You are not logged"
                    }))
                })
        }
    }


})


server.listen(port,hostname,()=>{
    console.log("Node server runing at localhost:3001")
})



function make_get_for_pages(res, path) {
    fs.readFile(path, "UTF-8", (err, html) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(html);
    })
}


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


function checkUserAuthentification(req){
    
}
