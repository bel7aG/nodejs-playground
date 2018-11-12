const fileSystem = require('fs');
const os = require(`os`);
const notes = require(`./notes.js`);

const user = os.userInfo();
fileSystem.appendFile(`fileOne.txt`, `${user.username}\tsum: ${notes.sum("1", 2)}\n`, (error) => {
  if (error) throw error;
  console.log(`the data was appended`);
});
