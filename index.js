const dank = require("./lib/Dank");

function Dank(token) {
    return new dank(token);
}

Dank.Memer = dank;
Dank.version = require("./package.json").version;

module.exports = Dank;
