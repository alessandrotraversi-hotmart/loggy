// TYPES
import type MessageColorInterface from "./message.color.interface";

export default class MessageColor {
  static execute(payload: MessageColorInterface): string {
    const { content, color, colorBackground = false } = payload;

    let colorCode;

    switch (color) {
      case "red":
        colorCode = colorBackground ? "41" : "31";
        break;

      case "gray":
        colorCode = colorBackground ? "100" : "90";
        break;

      case "yellow":
        colorCode = colorBackground ? "43" : "33";
        break;

      case "green":
        colorCode = colorBackground ? "42" : "32";
        break;

      case "blue":
        colorCode = colorBackground ? "44" : "34";
        break;

      case "bold":
        colorCode = "1";
        break;
    }

    return `\x1b[${colorCode}m${content}\x1b[0m`;
  }
}
