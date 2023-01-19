const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const sendData = (filePath) => {
        fs.readFile(filePath, (err, data) => {
            if (err)
                return;
            else {
                res.end(data);
            }
        })
    };
    switch (req.url) {
        case "/":
            res.statusCode = 200;
            sendData("./views/index.html");
            break;
        case "/about":
            res.statusCode = 200;
            sendData("./views/about.html");
            break;
        default:
            res.statusCode = 404;
            sendData("./views/404.html");
            break;
    }
})

const listenToServer = server.listen(3000, () => {
    console.log("Listening to server!");
})