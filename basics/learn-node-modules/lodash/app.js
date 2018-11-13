// lodash is a big object ... ... ... :D
const _ = require(`lodash`);

// console.log(_);

let me = "bel7aG";
console.log(_.isString(me)); // TRUE

me = "10";
console.log(_.isString(me)) // TRUE

              /*     remove the duplicated values
                          What the heck use filter
                                                        */
const uniqArray = _.uniq([1, 2, 3, 2, 2, "bel7aG", "Belhassen", true, false, "bel7aG"]);

console.log(uniqArray);
