const yargs = require('yargs');

const notes = require('./02-notes.js');

const argv = yargs.argv;
console.log(argv);

const command = process.argv[2];

//$ node 02-simplified-input-with-yargs.js add --title "belhassenGharsallah" --body "my body hmmm"

if (command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  note = note ? `Note created\n\ttitle: ${argv.title}\n\tbody: ${argv.body}` : "Allready Exist";
  console.log(note)
} else if (command === "list") {
  notes.getNote(argv.title);
} else if (command === "remove") {
  notes.removeNote(argv.title);
}

console.log("argv._[0] =", argv._[0]);
