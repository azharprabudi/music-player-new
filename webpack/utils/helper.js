const fs = require("fs");
const path = require("path");
const location = require("./location");

const generateResolveModule = () => {
  const sourcePath = path.resolve(location.ROOT_PATH, "src/pages");
  const sourceFolders = fs.readdirSync(sourcePath);

  return sourceFolders.reduce((res, folderName) => {
    const target = path.resolve(sourcePath, folderName);
    return {
      ...res,
      [`@${target}`]: target
    };
  }, {});
};

module.exports = {
  generateResolveModule
};
