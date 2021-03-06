const yargs = require('yargs')

const notes = require('./02-notes.js')

const title = {
  describe: `Title of note`,
   /*damand is false by default
                  Now with demand when you execute:
                      node file.js add
                      => Add a new note print out*/
  demand: true,
  alias: `t` // now instead of --title i can use -t
}

const body = {
  describe: `body argument`,
  demand: true,
  alias: `b`
}

const argv = yargs
  .command(`add`, `Add a new note`, {
    title,
    body
  })
  .command(`remove`, `Remove a note`, {
    title,
    body
  })
  .command(`read`, `Read a Note`)
  .command(`list`, `list all notes`)
  .help() // when i add the --help flag it will
  .argv

console.log(argv)

const command = process.argv[2]
//$ node 02-simplified-input-with-yargs.js add --title "belhassenGharsallah" --body "my body hmmm"

let note
switch (command) {
  case 'add':
    note = notes.addNote(argv.title, argv.body)
    note = note ?
      `Note created\n\ttitle: ${argv.title}\n\tbody: ${argv.body}`
      : note !== null ? "Allready Exist" : 'I need a title and body args man'
    console.log(note)
    break

  case 'read':
    note = notes.getNote(argv.title)
    console.log(note)
    break

  case 'list':
    let allNotes = notes.getAll()
    console.log(allNotes)
    allNotes.length ? allNotes.forEach(({ title, body }) => {
      console.log(`title: ${title}\nbody: ${body}`)
    }) : `Empty`
    break

  case 'remove':
    note = notes.removeNote(argv.title)
    const isRemoved = note ? `${argv.title} removed` : "Not Exist"
    console.log(isRemoved)
  }
