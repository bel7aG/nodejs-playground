const http = require(`http`)
const structure = require(`./structure.js`)
const fs = require(`fs`)


// createServer Method return a Server
const server = http.createServer((request, response) => {
  const { url, method, headers } = request
  // console.log(url, "\n", method, "\n", headers)
  // the event loop Always running in nodejs that's why our server not exit after execution so with precess.exit() we can force it to exit
  // process.exit()
  switch (url) {
    case '/':
      const homePage = `
        <h1>Home Page</h1>
        <a href="/login">Login</a>
      `
      response.write(structure('home', homePage))
      return response.end()

    case '/login':
      const loginContent = `
      <h1>Belhassen Gharsallah</h1>
      <form action="/message" method="POST">
        <input type="text" name="name" />
        <input type="text" name="surname" />
        <input type="text" name="email" />
        <button type="submit">Done</button>
        <a href="/">Home</a>
      </form>
      `
      response.write(structure('login', loginContent))
      return response.end()

    case '/message' :
      if (method === 'POST') {
        //the data event will be fired when ever a new chunk is ready to be ret
        /* execute a function for every incoming data */
        const body = []

        request.on('data', (chunk) => {
          body.push(chunk)
        })

        request.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          console.log(parsedBody)
          const inputsValue = parsedBody.split('&').map((input) => input.split('=')[1])
          console.log(inputsValue)
          fs.writeFileSync('message.txt', inputsValue)
        })

        response.statusCode = 302
        response.setHeader('location', '/')
        return response.end()

      }

    default:
      const notFound = `4O4`
      response.write(structure('Not Found', notFound))
      return response.end()
  }



  response.setHeader(`Content-Type`, `text/html`)


})

server.listen(5000)
