const http = require(`http`)

const myServer = http.createServer((request, response) => {
        /*(  request.url, request.method, request.headers ) ==> important once*/
  response.setHeader(`Content-Type`, `text/html`)
  if (request.url === `/`) {
    response.write(`
      <html>
        <head>
          <title>bel7aG NodeJs</title>
        </head>
        <body>
          <h1>Belhassen Gharsallah</h1>
          <form action="/ohlala" method="POST">
          <input type="text" name="ohlala" />
          <button type="submit">Done</button>
        </form>
      </body>
    </html>
    `)
    return response.end()
  }

    response.write(`
      <html>
        <head>
          <title>wassup</title>
        </head>
        <body>
          <h1>Your'e not in home this is my NodeJS Server ..</h1>
          <a href="../">back</a>
        </body>
      </html>
    `)
    response.end()
})

myServer.listen(5000)

/*                     ``                    */
