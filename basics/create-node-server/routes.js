const http = require(`http`)
const fileSystem = require(`fs`)

const structure = require(`./structure`)


const myServer = http.createServer((request, response) => {
        /*(  request.url, request.method, request.headers ) ==> important once*/
  const { url, method } = request

  let contentsDRY = ``

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

      const inputsValue = parsedBody.split(`&`).map((element) => element.split('=')[1])
        fileSystem.writeFileSync(`getValues.txt`, JSON.stringify(inputsValue))
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

module.exports = myServer
