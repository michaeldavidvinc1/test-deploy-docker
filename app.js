const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/plain');
    res.end('Helllo World Kubernetes and Docker')
})

server.listen(port, hostname, () => {
    console.log(`Server running ${port}`)
})