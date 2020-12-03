const data = require("./today.json");

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: data,
  });
};
