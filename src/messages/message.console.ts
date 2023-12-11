// MODULES
import MessageConsoleStatus from "./modules/message.console.status";
import MessageConsoleTime from "./modules/message.console.time";
import MessageConsoleContext from "./modules/message.console.context";
import MessageConsoleMain from "./modules/message.console.main";

// TYPES
import type WinstonConsoleInterface from "../types/winston.console.interface";
import MessageConsoleClassName from "./modules/message.console.class-name";

export default class MessageConsole {
  static compose(payload: WinstonConsoleInterface): string {
    const status = MessageConsoleStatus.setFormat(payload);
    const time = MessageConsoleTime.setFormat(payload);
    const context = MessageConsoleContext.setFormat(payload);
    const main = MessageConsoleMain.setFormat(payload);
    const className = MessageConsoleClassName.setFormat(payload);

    return `${status} ${time} [ ${context} ]${className} ${main}`;
  }
}
