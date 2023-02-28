import { createLogger, format, transports } from 'winston';

const transport_file = [
  new transports.File({
    filename: 'error.log',
    level: 'error',
  }),
  new transports.File({ filename: 'logger.log' }),
];

export const logger = createLogger({
  level: process.env.DEBUG === 'true' ? 'debug' : 'info',
  format: format.combine(format.splat(), format.simple()),
  transports: transport_file,
});
