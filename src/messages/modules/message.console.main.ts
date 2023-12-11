// TYPES
import type WinstonConsoleInterface from "../../types/winston.console.interface";

// UTILS
import MessageColor from "../../utils/message.colors";

// ENUMS
import { LoggerColorEnums } from "../../enums/logger.colors.enums";
import { LoggerLevelsEnums } from "../../enums/logger.levels.enums";

export default class MessageConsoleTitle {
  static setFormat(payload: WinstonConsoleInterface): string {
    const { body, level } = payload;

    const content = body;
    const status = level.replace(/\x1b\[\d+m/g, "") as LoggerLevelsEnums;

    switch (status) {
      case LoggerLevelsEnums.help:
        return MessageColor.execute({
          content,
          color: LoggerColorEnums.green,
        });

      case LoggerLevelsEnums.info:
        return MessageColor.execute({
          content,
          color: LoggerColorEnums.gray,
        });

      case LoggerLevelsEnums.warn:
        return MessageColor.execute({
          content,
          color: LoggerColorEnums.yellow,
        });

      case LoggerLevelsEnums.error:
        return MessageColor.execute({
          content,
          color: LoggerColorEnums.red,
        });
    }
  }
}
