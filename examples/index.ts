import Logger from "../src/decorator/logger.decorator";

@Logger({
  context: "INFRA: DATABASE",
})
class ExampleClass {
  private readonly logger;

  constructor() {}

  execute() {
    console.log("------------");

    this.logger.info("Info title");

    this.logger.success("Success title");

    this.logger.warn("Warn title");

    this.logger.error(new Error("Error1234"));
  }
}

@Logger({
  context: "INFRA: DATABASE",
  printDate: false,
})
class ExampleClassWithoutDateFormat {
  private readonly logger;

  constructor() {}

  execute() {
    console.log("------------");

    this.logger.info("Info title");
  }
}

@Logger({
  context: "INFRA: DATABASE",
  showClassName: true,
})
class ExampleClassWithHandlerError {
  private readonly logger;

  constructor() {}

  execute() {
    console.log("------------");

    const error = new Error("Error1234");
    const useHandlerError = (e) => `${e}${e.stack.split("\n")[2]}`;
    this.logger.error(useHandlerError(error));
  }
}

new ExampleClass().execute();
new ExampleClassWithoutDateFormat().execute();
new ExampleClassWithHandlerError().execute();
