const userAsync = (x, callback) => {
  setTimeout(() => {
    callback(x);
  }, 0);
};

let question = userAsync('Do You Love NodeJS?', (question) => {
  console.log(`question: ${question}`);
});

let me = userAsync('Belhasse Gharsallah (bel7aG)', (me) => {
  console.log(`info: ${me}`);
});

const merge = `${question}: yeah\n${me}`;
console.log(merge);
