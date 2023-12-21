const logger = require('./initLogger');

const logResponseTime = (req, res, time) => {
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;
  const clientIp = req.ip || req.connection.remoteAddress;

  const log = { method: method, url: url, status: Number.parseFloat(status), response_time: Number.parseFloat(time).toFixed(2), client_ip: clientIp };
 
  logger.info(`${method} ${url} ${status} - - ${time.toFixed(2)} ms`, log);
};

module.exports = logResponseTime;