const logger = require('./initLogger');
const morgan = require('morgan');

const morganMiddleware = morgan(
    function (tokens, req, res) {
        return JSON.stringify({
            method: tokens.method(req, res),
            url: tokens.url(req, res),
            status: Number.parseFloat(tokens.status(req, res)),
            response_time: Number.parseFloat(tokens['response-time'](req, res)),
        });
    },
    {
        stream: {
            write: (message) => {
                const data = JSON.parse(message);
                logger.http(morgan('tiny'), data);
            },
        },
    }
);

module.exports = morganMiddleware;