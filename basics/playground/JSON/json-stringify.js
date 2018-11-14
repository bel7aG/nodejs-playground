const aboutMe = {
  id: "bel7aG",
  name: "Belhassen Gharsallah"
};
console.log(typeof(aboutMe)); // Object

const stringAboutMe = JSON.stringify(aboutMe);
console.log(typeof(stringAboutMe)); //string
console.log(stringAboutMe);


/*

  JSON.stringify(object) : convert object into a string

*/
