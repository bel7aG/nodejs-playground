console.log("\n\n");


let command = process.argv.filter((element, index) => {
  console.log(`${index}: ${element}`);
  return element;
});

console.log('Command Array:', command);

let commandResult = command[2] ? `command: ${command[2]}` : `command not recognized`;
console.log(commandResult);


console.log("\n\n");
