const http = require(`http`)

// createServer Method return a Server
const server = http.createServer((request, response) => {
  console.log(request)
})

server.listen(5000)
