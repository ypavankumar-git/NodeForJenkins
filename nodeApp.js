const http = require("http");

const server = http.createServer((req, res) => {
       
    console.log("entered nodeapp");
  
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify({connection : successfull}));
    });

server.listen(3030, "localHost", () => {
  console.log(`Server running at http://localhost:3030/`);
});