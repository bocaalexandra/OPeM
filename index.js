const http = require("http")
const fs = require("fs");
const path = require("path");

let doLogin = require("./JavaScript/doLogin")

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
                fs.readFile("home.html", "UTF-8", (err, html) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "text/html");
                    res.end(html);
                })
            }
            else if (req.url === "/login.html") {
                //GET LOGIN PAGE
                fs.readFile("./PagesHTML/login.html", "UTF-8", (err, html) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "text/html");
                    res.end(html);
                })
            }
        }
        catch (err) {
            res.end(err);
        }

    }
    else if (req.method === "POST") {
        if (req.url === "/login") {
            get_data(req)
                .then(doLogin)
                .then(user => {
                    if (user) {
                        console.log(user)
                        res.statusCode = 404
                        res.setHeader("Content-type", "text/plain")
                        let output = JSON.stringify({
                            response : "fail"
                        })
                        res.end(output)
                    }
                    else {
                        res.statusCode = 200;
                        res.setHeader("Content-type", "text/plain")
                        let output = JSON.stringify({
                            response : "succes"
                        })
                        res.end(output)
                    }

                })
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