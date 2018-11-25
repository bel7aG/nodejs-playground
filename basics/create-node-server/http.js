const http = require(`http`)

const myServer = http.createServer((request, result) => {
  console.log(request)

})

console.log(process.arch)

/*                     ``                    */
