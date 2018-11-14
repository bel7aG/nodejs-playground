const yargs = require('yargs');

const notes = require('./02-notes.js');

const argv = yargs.argv;
console.log(argv);

const command = process.argv[2];

//$ node 02-simplified-input-with-yargs.js bel7aG --title "belhassenGharsallah" --body "my body hmmm"

if (command === "bel7aG") {
  notes.addNote(argv.title, argv.body);
  /*
  $ node 02-simplified-input-with-yargs.js bel7aG --title "belhassenGharsallah" --body "my body hmmm"
        { _: [ 'bel7aG' ],
        title: 'belhassenGharsallah',
        body: 'my body hmmm',
        '$0': '02-simplified-input-with-yargs.js' }

        Adding note:
               belhassenGharsallah
               my body hmmm
  */
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
