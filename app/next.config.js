const withTM = require("next-transpile-modules")(["@mp/shared"]);

module.exports = withTM({
  target: "serverless",
});
