const fs = require(`fs`);
const addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  try {
    let notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch(error) {

  }

  const exist = notes.find(({title, body}) => title == note.title && body == note.body);
  if (!exist) {
    notes.push(note);
    fs.writeFileSync(`notes-data.json`, JSON.stringify(notes));
  } else {
    console.log('allready exist');
  }
};

const getAll = () => {
  console.log("Getting all notes");
}

const getNote = (note) => {
  console.log(`note: ${note}`);
}

const removeNote = (note) => {
  console.log(`${note} removed`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
