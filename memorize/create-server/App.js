const http = require(`http`)
const structure = require(`./structure.js`)

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

    break

    case '/login':
      const loginContent = `
      <h1>Belhassen Gharsallah</h1>
      <form action="/ohlala" method="POST">
        <input type="text" name="name" />
        <input type="text" name="surname" />
        <input type="text" name="email" />
        <button type="submit">Done</button>
        <a href="/">Home</a>
      </form>
      `
      response.write(structure('login', loginContent))
      return response.end()
    break
    default:
      const notFound = `4O4`
      response.write(structure('Not Found', notFound))
      return response.end()
  }



  response.setHeader(`Content-Type`, `text/html`)


})

server.listen(5000)
