var ura = require("unique-random-array");
var list = require("./list.json");

module.exports = {
  all: list,
  random: ura(list)
}
