// TYPES
import type WinstonConsoleInterface from "../../types/winston.console.interface";

// LIBS
import dayjs from "dayjs";

// UTILS
import MessageColor from "../../utils/message.colors";

// ENUMS
import { LoggerColorEnums } from "../../enums/logger.colors.enums";

export default class MessageConsoleTime {
  static setFormat(payload: WinstonConsoleInterface): string {
    const { timestamp, printDate = true } = payload;

    const dateBaseFormat = "HH:mm:ss";
    const dateFormat = printDate
      ? `DD/MM/YY ${dateBaseFormat}`
      : dateBaseFormat;
    const time = `${dayjs(timestamp as Date).format(dateFormat)}`;

    const coloredTime = MessageColor.execute({
      content: time,
      color: LoggerColorEnums.gray,
    });
    return coloredTime;
  }
}
