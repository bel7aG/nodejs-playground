const fs = require(`fs`);

const fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(error) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  const exist = notes.find(({title, body}) => title == note.title && body == note.body);
  if (!exist) {
    notes.push(note);
    fs.writeFileSync(`notes-data.json`, JSON.stringify(notes));
    return note;
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
