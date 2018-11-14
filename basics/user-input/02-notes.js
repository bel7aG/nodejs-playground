const addNote = (title, body) => {
  console.log('\n\n\nAdding note:\n\t', title, "\n\n\t", body)
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
