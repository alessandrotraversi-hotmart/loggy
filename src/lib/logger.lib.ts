// MAIN
import winston from "winston";

// MESSAGE
import MessageConsole from "../messages/message.console";

// TYPES
import type MessageConsoleInterface from "../types/message.console.interface";
import type LoggerConfigInterface from "../types/logger.config.interface";

export default class LoggerLib {
  private readonly logger: winston.Logger;

  constructor(payload: LoggerConfigInterface) {
    const { timestamp, printf } = winston.format;

    const customFormat = printf(({ level, message, timestamp }) => {
      return MessageConsole.compose({
        timestamp,
        ...payload,
        ...message,
        level: level as any,
      });
    });

    this.logger = winston.createLogger({
      levels: winston.config.cli.levels,
      format: winston.format.combine(
        winston.format.colorize(),
        timestamp(),
        customFormat,
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
      ],
    });
  }

  public info(payload: MessageConsoleInterface): void {
    this.logger.info(payload);
  }

  public success(payload: MessageConsoleInterface): void {
    this.logger.help(payload);
  }

  public error(payload: MessageConsoleInterface): void {
    this.logger.error(payload);
  }

  public warn(payload: MessageConsoleInterface): void {
    this.logger.warn(payload);
  }
}
