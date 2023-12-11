// TYPES
import type Logger from "../src/logger";

// DECORATOR
import Log from "../src/decorator/logger.decorator";

@Log({
  context: "INFRA: DATABASE",
})
class ExampleClass {
  private static readonly logger: Logger;

  static execute(): void {
    console.log("------------");

    this.logger.info("Info title");

    this.logger.success("Success title");

    this.logger.warn("Warn title");

    this.logger.error(new Error("Error1234"));
  }
}

@Log({
  context: "INFRA: DATABASE",
  printDate: false,
  showClassName: false,
})
class ExampleClassWithoutDateFormat {
  private static readonly logger: Logger;

  static execute(): void {
    console.log("------------");

    this.logger.info("Info title");
  }
}

@Log({
  context: "INFRA: DATABASE",
  showClassName: true,
})
class ExampleClassWithHandlerError {
  private static readonly logger: Logger;

  static execute(): void {
    console.log("------------");

    const error = new Error("Error1234");
    const useHandlerError = (e: any): string => `${e}${e.stack.split("\n")[2]}`;
    this.logger.error(useHandlerError(error));
  }
}

ExampleClass.execute();
ExampleClassWithoutDateFormat.execute();
ExampleClassWithHandlerError.execute();
