const getFileName = function (fullPath) {
  const fileNameRegex = /[^/\\]*?(?=\.[^.\\/]*$)/;
  const fileName = fullPath.match(fileNameRegex)[0];

  return fileName;
};

const main = function () {
  result1 = getFileName("c:\\WebServers\\home\\testsite\\www\\myfile.txt");
  console.log(result1);
};

main();
