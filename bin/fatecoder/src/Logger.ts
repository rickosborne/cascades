import * as process from 'process';
import * as winston from "winston";

export enum LogLevel {
	ERROR = 'error',
	WARN = 'warn',
	INFO = 'info',
	VERBOSE = 'verbose',
	DEBUG = 'debug',
}

export function parseLogLevel(maybeLevel: string | undefined, defaultValue?: LogLevel): LogLevel {
	if (maybeLevel != null) {
		const match = (LogLevel as unknown as Record<string, LogLevel>)[maybeLevel.toUpperCase()];
		if (match !== undefined) {
			return match;
		}
	}
	if (defaultValue != null) {
		return defaultValue;
	}
	throw new Error(`Not a valid LogLevel: '${maybeLevel}'`);
}

const LOG_LEVEL_DEFAULT: LogLevel = parseLogLevel(process.env.LOG_LEVEL, LogLevel.INFO);

export class Logger {
	private readonly logger: winston.Logger;

	constructor(
		logLevel: LogLevel = LOG_LEVEL_DEFAULT,
	) {
		this.logger = winston.createLogger({
			level: logLevel,
			levels: winston.config.npm.levels,
			format: winston.format.simple(),
			transports: [
				new winston.transports.Console(),
			]
		});
	}

	debug(msg?: string | (() => string) | Promise<string | (() => string)>): void {
		if (typeof msg === 'string') {
			this.logger.log(LogLevel.DEBUG, msg);
		} else if (typeof msg === 'function') {
			this.logger.log(LogLevel.DEBUG, msg());
		} else if (msg != null) {
			Promise.resolve(msg).then(m => this.debug(m));
		}
	}

	error(msg?: string | (() => string) | Promise<string | (() => string)>): void {
		if (typeof msg === 'string') {
			this.logger.log(LogLevel.ERROR, msg);
		} else if (typeof msg === 'function') {
			this.logger.log(LogLevel.ERROR, msg());
		} else if (msg != null) {
			Promise.resolve(msg).then(m => this.error(m));
		}
	}
}
