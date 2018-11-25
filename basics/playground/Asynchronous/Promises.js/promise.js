const beginnerPromise = new Promise((resolve, reject) => {
  resolve(`Working`)
  reject(`rejected`)
})
beginnerPromise.then((message) => {
  console.log(`Success: ${message}`)
})
