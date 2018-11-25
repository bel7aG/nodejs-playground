// console.log(global);
//  the global is the window of Node unlike the browser he had a window Object.



/* the process is like document object in the browser. */
let learnProcess = process

    /* processor arch (x64). */
learnProcess = process.arch

    /* an array containing the command line arguments. */
learnProcess = process.argv

    /* Object contain user environment */
learnProcess = process.env

    /*returns the current directory of process*/
learnProcess = process.cwd()

console.log(learnProcess)

process.exit(0);
