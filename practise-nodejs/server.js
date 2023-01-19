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
            sendData("./views/index.html");
        case "/about":
            sendData("./views/about.html");
        default:
            sendData("./views/404.html");
    }
})

const listenToServer = server.listen(3000, () => {
    console.log("Listening to server!");
})