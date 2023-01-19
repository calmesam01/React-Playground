const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
})

const listenToServer = server.listen(3000, () => {
    console.log("Listening to server!");
})