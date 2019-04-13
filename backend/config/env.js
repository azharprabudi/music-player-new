const result = require("dotenv").config({
  path: "../.env"
});

if (result.error) {
  throw result.error;
}

console.log(result.parsed);
