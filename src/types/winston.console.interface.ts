// ENUMS
import type { LoggerLevelsEnums } from "../enums/logger.levels.enums";
import type MessageConsoleInterface from "./message.console.interface";

export default interface WinstonConsoleInterface
  extends MessageConsoleInterface {
  level: LoggerLevelsEnums;
  timestamp?: unknown;
}
