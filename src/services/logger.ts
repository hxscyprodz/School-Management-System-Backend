import { createLogger, format, transports} from "winston";

const { combine, printf, json, colorize, timestamp} = format;

const loggerFormat = printf(({level, message, timestamp}) => {
    return `${timestamp} : [ ${level} ] : ${message}`
});

const logger = createLogger({
    level: "info",
    format: combine(colorize(), timestamp(), loggerFormat),
    transports: [ new transports.Console() ]
});

export default logger;