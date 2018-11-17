const yargs = require('yargs')

const notes = require('./02-notes.js')

const argv = yargs.argv
console.log(argv)

const command = process.argv[2]
//$ node 02-simplified-input-with-yargs.js add --title "belhassenGharsallah" --body "my body hmmm"

let note
switch (command) {
  case 'add':
    note = notes.addNote(argv.title, argv.body)
    note = note ? `Note created\n\ttitle: ${argv.title}\n\tbody: ${argv.body}` : "Allready Exist"
    console.log(note)
    break

  case 'list':
    note = notes.getNote(argv.title)
    console.log(note)
    break

  case 'list-all':
    notes.getAll();
    break

  case 'remove':
    note = notes.removeNote(argv.title)
    const isRemoved = note ? `${argv.title} removed` : "Not Exist"
    console.log(isRemoved)
  }
