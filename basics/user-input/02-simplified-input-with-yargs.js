const yargs = require('yargs');

const notes = require('./02-notes.js');

const argv = yargs.argv;
console.log(argv);

const command = process.argv[2];
//$ node 02-simplified-input-with-yargs.js add --title "belhassenGharsallah" --body "my body hmmm"

switch (command) {
  case 'add':
    let note = notes.addNote(argv.title, argv.body);
    note = note ? `Note created\n\ttitle: ${argv.title}\n\tbody: ${argv.body}` : "Allready Exist";
    console.log(note);
    break;

  case 'list':
    notes.getNote(argv.title);
    break;
  case 'remove':
    const removeNote = notes.removeNote(argv.title);
    const isRemoved = removeNote ? `${argv.title} removed` : "Not Exist";
    console.log(isRemoved);
  }
