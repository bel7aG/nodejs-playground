const getUser = (id, callback) => {
  const user = {
    id,
    name: "Belhassen Gharsallah"
  }
  setTimeout(() => {
    callback(user)
  }, 0)
}

console.log("Hello 1")

const bel7aG = getUser("bel7aG", (me) => {
  console.log(me)
})

console.log("hello 2")
