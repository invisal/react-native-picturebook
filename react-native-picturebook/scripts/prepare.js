const fs = require("fs");

// Copy package.json to build folder
const packageContent = JSON.parse(fs.readFileSync("./package.json", "utf8"));
packageContent.main = "src/index.js";

fs.writeFileSync(
  "build/package.json",
  JSON.stringify(packageContent, undefined, 2)
);
