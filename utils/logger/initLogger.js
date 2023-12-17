const { createLogger, transports, format, Logger } = require("winston");
const LokiTransport = require("winston-loki");

const options = {
  transports: [
    new LokiTransport({
      host: "loki:3100",
      json: true,
      format: format.json(),
      // onConnectionError: (error) => {
      //   console.log(error);
      // }
    }),
    new transports.Console({
      format: format.combine(format.simple(), format.colorize())
    })
  ]
};

const logger = createLogger(options);

module.exports = logger;
