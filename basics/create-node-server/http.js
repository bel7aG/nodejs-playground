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
        <input type="text" name="name" />
        <input type="text" name="surname" />
        <input type="text" name="email" />
        <button type="submit">Done</button>
      </form>
    `)
    response.write(structure(contentsDRY))
    return response.end()
  }

  if (url === `/ohlala` && method === `POST`) {
    const body = []

    request.on(`data`, (chunk) => {
      body.push(chunk)
      console.log(body) //Buffer (7aja mchaga3ba) all the input in the first case of body(mchaga3bin)
    })

    request.on(`end`, () => {
      //Buffer is a global variable by nodejs
      const parsedBody = Buffer.concat(body).toString()
      console.log(parsedBody) // output: the value of the input

      const inputsValue = parsedBody.split(`&`).map((element) =>
        element.split('=')[1]
      )
      fileSystem.writeFileSync(`getValues.txt`, inputsValue[0])
    })

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
