const os = require(`os`);  /*Operating System Module*/

  //    The os.cpus() method returns an array of objects containing
  //            information about each logical CPU core.

const osCpus = os.cpus();
console.log(osCpus);


          // The os.freemem() method returns the amount
          // of free system memory in bytes as an integer.

const osFreeMemory = os.freemem();
console.log(`\n\n\nMemory: ${osFreeMemory / Math.pow(1024, 3)}  Go`);


        //  The os.totalmem() method returns the total
        //    amount of system memory in bytes as an integer.
const osTotalMomory = os.totalmem();
console.log(`\ntotal Memory: ${osTotalMomory}`);


      // The os.platform() method returns a string identifying the operating
      //    system platform as set during compile time of Node.js.

const osPlatfrom = os.platform();
console.log(`\n${osPlatfrom}`);
