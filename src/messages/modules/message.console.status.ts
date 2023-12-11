// TYPES
import type WinstonConsoleInterface from "../../types/winston.console.interface";

// UTILS
import MessageColor from "../../utils/message.colors";

// ENUMS
import { LoggerColorEnums } from "../../enums/logger.colors.enums";
import { LoggerLevelsEnums } from "../../enums/logger.levels.enums";
import { LoggerStatusEnums } from "../../enums/logger.status.enums";

export default class MessageConsoleStatus {
  static setFormat(payload: WinstonConsoleInterface): string | undefined {
    const { level } = payload;

    const status = level.replace(/\x1b\[\d+m/g, "") as LoggerLevelsEnums;

    switch (status) {
      case LoggerLevelsEnums.help:
        return MessageColor.execute({
          content: LoggerStatusEnums.success,
          color: LoggerColorEnums.green,
        });

      case LoggerLevelsEnums.info:
        return MessageColor.execute({
          content: `   ${LoggerStatusEnums.info}`,
          color: LoggerColorEnums.blue,
        });

      case LoggerLevelsEnums.warn:
        return MessageColor.execute({
          content: `   ${LoggerStatusEnums.warn}`,
          color: LoggerColorEnums.yellow,
          colorBackground: true,
        });

      case LoggerLevelsEnums.error:
        return MessageColor.execute({
          content: `  ${LoggerStatusEnums.error}`,
          color: LoggerColorEnums.red,
          colorBackground: true,
        });
    }
  }
}
