import type { LoggerColorEnums } from "../enums/logger.colors.enums";

export default interface MessageColorInterface {
  content: string;
  color: LoggerColorEnums;
  colorBackground?: boolean;
}
