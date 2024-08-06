import http from 'http'

const port = 3000;

const server = http.createServer((req, res) => {

    if (req.url === '/myself') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain");
        res.write("My team name is AST team\n")
        res.write("what are you doing\n")
        res.end()
    }

    else if (req.url === '/html') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html");
        res.write("my name is teja\n")
        res.write("<h1>Hello darlings....</h1>")
        res.end()
    }

    else if (req.method === 'POST' && req.url === '/recivedata') {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json");
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        console.log(body)
        res.end()
    }

    else if (req.url === '/senddata') {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json");
        const data = { Name: "Teja", Branch: "cse" }
        res.end(JSON.stringify(data))
    }

    else {
        res.statusCode = 400
        res.end("Page Not Found\n")
    }
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});