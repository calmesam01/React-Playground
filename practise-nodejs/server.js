const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("content-type", "text/html")
    res.write("<h1>Hello World!</h1>");
    res.end()
})

const listenToServer = server.listen(3000, () => {
    console.log("Listening to server!");
})