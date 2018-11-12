const os = require(`os`);  /*Operating System Module*/

  //    The os.cpus() method returns an array of objects containing
  //            information about each logical CPU core.

const osCpus = os.cpus();
console.log(osCpus);

          // The os.freemem() method returns the amount
          // of free system memory in bytes as an integer.
os.freemem()

console.log(os.freemem() / Math.pow(1024, 3));
