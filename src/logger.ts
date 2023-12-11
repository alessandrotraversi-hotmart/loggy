// LIBS
import WinstonLogger from "./lib/logger.lib";

// ENUMS
import { LoggerStatusEnums } from "./enums/logger.status.enums";

// TYPES
import type LoggerMessageInterface from "./types/message.console.interface";
import type LoggerConfigInterface from "./types/logger.config.interface";

type PayloadType = Pick<LoggerMessageInterface, "body" | "status">;

export default class Logger {
  private readonly config: LoggerConfigInterface;
  private readonly winstonLogger: WinstonLogger;

  constructor(payload: LoggerConfigInterface) {
    this.winstonLogger = new WinstonLogger(payload);
    this.config = payload;
  }

  // private setFileInfo(error: any): void {
  //   const stackInfo = error.stack?.split("\n")[3];
  //   const fileInfo = stackInfo.match(/\(([^)]+)\)/)[1];

  //   const [fileName, lineNumber] = fileInfo.split(":");

  //   this.message.body.file = fileName;
  //   this.message.body.line = Number(lineNumber);
  // }

  private generate(payload: PayloadType): void {
    const { status } = payload;

    switch (status) {
      case LoggerStatusEnums.info:
        this.winstonLogger.info({ ...payload, ...this.config });
        break;
      case LoggerStatusEnums.success:
        this.winstonLogger.success({ ...payload, ...this.config });
        break;
      case LoggerStatusEnums.warn:
        this.winstonLogger.warn({ ...payload, ...this.config });
        break;
      case LoggerStatusEnums.error:
        this.winstonLogger.error({ ...payload, ...this.config });
        break;
    }
  }

  public info(body: string): void {
    this.generate({ body, status: LoggerStatusEnums.info });
  }

  public success(body: string): void {
    this.generate({ body, status: LoggerStatusEnums.success });
  }

  public warn(body: string): void {
    this.generate({ body, status: LoggerStatusEnums.warn });
  }

  public error(body: string): void {
    this.generate({ body, status: LoggerStatusEnums.error });
  }
}
