
const fs = require("fs");


fs.readFile("WebProjects/Backend/usingnode/message.txt", 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});