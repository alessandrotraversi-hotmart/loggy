// TYPES
import type WinstonConsoleInterface from "../../types/winston.console.interface";

// UTILS
import MessageColor from "../../utils/message.colors";

// ENUMS
import { LoggerColorEnums } from "../../enums/logger.colors.enums";

export default class MessageConsoleClassName {
  static setFormat(payload: WinstonConsoleInterface): string {
    const { className, showClassName = false } = payload;

    const coloredClassName = MessageColor.execute({
      content: `${className}:`,
      color: LoggerColorEnums.gray,
    });
    return showClassName ? coloredClassName : "";
  }
}
