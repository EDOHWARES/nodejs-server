// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;
// const successStatusCode = 200;

// const server = http.createServer((req, res) => {
//     res.statusCode = successStatusCode;
//     res.setHeader('Content-Type', 'text/html');
//     res.end(`Hello NodeJs world at ${req.url}`);
// });

// server.listen(port, hostname, () => {
//     console.log(`server running at http://${hostname}:${port}/`)
// });


// const http = require('http');
// const url = require('url');

// const hostname = '127.0.0.1';
// const port = 3000;
// const successStatusCode = 200;

// const server = http.createServer((req, res) => {
//     res.statusCode = successStatusCode;
//     res.setHeader('Content-Type', 'text/html');
//     let q = url.parse(req.url, true).query;
//     // let txt = q.year + " " + q.month;
//     res.end('something');
// });

// server.listen(port, hostname, () => {
//     console.log(`server running at http://${hostname}:${port}/`)
// });



const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const successStatusCode = 200;

const server = http.createServer((req, res) => {
    res.statusCode = successStatusCode;
    res.setHeader('Content-Type', 'text/html');
    // fs.createReadStream('index.html').pipe(res);

    if (req.url === '/index') {
        fs.createReadStream('index.html').pipe(res);
    } else if (req.url === '/about') {
        fs.createReadStream('about.html').pipe(res);
    } else if (req.url == '/contact-me') {
        fs.createReadStream('contact-me.html').pipe(res);
    } else {
        fs.createReadStream('404.html').pipe(res);
    };
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`)
});
