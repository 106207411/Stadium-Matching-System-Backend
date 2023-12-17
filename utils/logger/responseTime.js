const logger = require('./initLogger');

const logResponseTime = (req, res, time) => {
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;

  const log = { method: method, url: url, status: Number.parseFloat(status), response_time: Number.parseFloat(time) };
 
  logger.info(`${method} ${url} ${status} - - ${time} ms`, log);
};

module.exports = logResponseTime;