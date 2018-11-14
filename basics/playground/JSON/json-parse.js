const stringAboutMe = `{
  "id": "bel7aG",
  "name": "Belhassen Gharsallah",
  "githubAccount": "https://www.github.com/bel7aG"
}`;

const objectAboutMe = JSON.parse(stringAboutMe); //convert string into an object (parse is the opposite of stringify)

console.log(typeof("\ntype: ", objectAboutMe));
console.log("\n\nobject: \n", objectAboutMe);


const githubLink = objectAboutMe.githubAccount;
console.log("\n\n", githubLink);
