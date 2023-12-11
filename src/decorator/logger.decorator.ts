// MAIN
import Logger from "../logger";

// TYPES
import type LoggerConfigInterface from "../types/logger.config.interface";

export default function Loggable(setting: LoggerConfigInterface) {
  return function <T extends new (...args: any[]) => object>(constructor: T) {
    return class extends constructor {
      logger = new Logger({ ...setting, className: constructor.name });
    };
  };
}
