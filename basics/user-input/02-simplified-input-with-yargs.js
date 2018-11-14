const yargs = require('yargs');

const notes = require('./02-notes.js');

const argv = yargs.argv;
console.log(argv);

const command = process.argv[2];

//$ node 02-simplified-input-with-yargs.js add --title "belhassenGharsallah" --body "my body hmmm"

if (command === "add") {
  notes.addNote(argv.title, argv.body);
} else if (command === "add") {
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  notes.getNote(argv.title);
} else if (command === "remove") {
  notes.removeNote(argv.title);
  /*
  node 02-simplified-input-with-yargs.js remove --title "belhassenGharsallah" --body "my body hmmm"
      { _: [ 'remove' ],
      title: 'belhassenGharsallah',
      body: 'my body hmmm',
      '$0': '02-simplified-input-with-yargs.js' }
      belhassenGharsallah removed
      argv._[0] = remove
  */
}

console.log("argv._[0] =", argv._[0]);
