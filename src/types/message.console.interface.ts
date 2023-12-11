// ENUMS
import type { LoggerStatusEnums } from "../enums/logger.status.enums";
import type LoggerConfigInterface from "./logger.config.interface";

export default interface MessageConsoleInterface extends LoggerConfigInterface {
  status: LoggerStatusEnums;
  body: string;
}
