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

  const exist = notes.find(({title}) => title === note.title);
  if (!exist) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

// ------------------

const getAll = () => {
}

// ------------------

const getNote = (spotedTitle) => {
  return fetchNotes().length ? (fetchNotes().find(({ title }) => title === spotedTitle) ? `get: ${spotedTitle}` : `not Exist`) : `no notes right now`
}

// ------------------

const removeNote = (spotedTitle) => {
  if (fetchNotes()){
    let notes = fetchNotes();
    const before = notes.length;
    notes = notes.filter(({ title }) => title !== spotedTitle);
    const after = notes.length;
    const isThere = (before !== after) ? true : false;
    saveNotes(notes);
    return isThere;
  }
  return false;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
