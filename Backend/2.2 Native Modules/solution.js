const fs = require("fs");
fs.writeFile("message.txt", " Hello grom Node Js",  (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 