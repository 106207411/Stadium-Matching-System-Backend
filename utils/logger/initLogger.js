const { createLogger, transports, format, Logger } = require("winston");
const LokiTransport = require("winston-loki");

const options = {
  level: 'http',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }),
    format.json()
  ),
  transports: [
    new LokiTransport({
      host: "loki:3100",
      json: true,
      format: format.json(),
      // onConnectionError: (error) => {
      //   console.log(error);
      // }
    }),
    new transports.Console()
  ]
};

const logger = createLogger(options);

module.exports = logger;
