const http = require("http");

const server = http.createServer((req, res) => {
       
    console.log("entered node app");
  
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify({connection : successfull}));
    });

server.listen(3030, localhost, () => {
  console.log(`Server running at http://${node_hostname}:${node_port}/`);
});