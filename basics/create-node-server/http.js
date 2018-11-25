const http = require(`http`)
const fileSystem = require(`fs`)

const myServer = http.createServer((request, response) => {
        /*(  request.url, request.method, request.headers ) ==> important once*/

  const { url, method } = request

  let contentsDRY = ``
  const structure = (dry = `` /*DONT REPEAT YOURSELF*/) => (`
    <html>
      <head>
        <title>bel7aG NodeJs</title>
      </head>
      <body>
        <h1>bel7aG</h1>
        ${dry}
      </body>
    </html>
  `)
  if (url === `/`) {
    contentsDRY = (`
      <h1>Belhassen Gharsallah</h1>
      <form action="/ohlala" method="POST">
        <input type="text" name="ohlala" />
        <button type="submit">Done</button>
      </form>
    `)
    response.write(structure(contentsDRY))
    return response.end()
  }

  if (url === `/ohlala` && method === `POST`) {
    fileSystem.writeFileSync(`ohlala.txt`, `What's going on`)
    response.statusCode = 302
    response.setHeader(`Location`, `/`)
    return response.end()
  }

  response.setHeader(`Content-Type`, `text/html`)
  contentsDRY = (`
    <h1>You're not in home this is my NodeJS Server ..</h1>
    <a href="/">back</a>
  `)
  response.write(structure(contentsDRY))
  response.end()

})


myServer.listen(5000, 'localhost', () => {
  myServer.setTimeout(0, () => {
    console.log(this)
  })
})

/*                     ``                    */
