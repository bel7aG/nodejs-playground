const fileSystem = require('fs');
const operatinSystem = require('os');

fileSystem.appendFile(`fileOne.txt`, `\nbel7aG\nBelhassen Gharsallah`, (error) => {
  if (error) throw error;
  console.log(`the data was appended`);
});
