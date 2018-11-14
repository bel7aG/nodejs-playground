const fileSystem = require(`fs`);

let notes = {
  title: 'bel7aG',
  body: 'muscle'
};

fileSystem.writeFileSync(`notes.json`, JSON.stringify(notes));

const notesStringReadFile = fileSystem.readFileSync(`notes.json`);
