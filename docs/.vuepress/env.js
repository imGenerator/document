const dotenv = require('dotenv');
const env = dotenv.config({
  path: `${process.env.NODE_ENV === "production" ? ".production" : ".env"}`,
});
const global = env.parsed;
console.log(global)
module.exports = global