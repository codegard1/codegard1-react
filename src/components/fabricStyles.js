export const colorPrefix = {
  bg: "ms-bgColor-",
  font: "ms-fontColor-",
  border: "ms-borderColor-"
};

//Todo: implement KeyMirror for this object
export const colorSuffix = {
  alert: "alert",
  black: "black",
  blue: "blue",
  blueDark: "blueDark",
  blueLight: "blueLight",
  blueMid: "blueMid",
  error: "error",
  green: "green",
  greenDark: "greenDark",
  greenLight: "greenLight",
  info: "info",
  magenta: "magenta",
  magentaDark: "magentaDark",
  magentaLight: "magentaLight",
  orange: "orange",
  orangeLight: "orangeLight",
  orangeLighter: "orangeLighter",
  purple: "purple",
  purpleDark: "purpleDark",
  purpleLight: "purpleLight",
  red: "red",
  redDark: "redDark",
  success: "success",
  teal: "teal",
  tealDark: "tealDark",
  tealLight: "tealLight",
  white: "white",
  yellow: "yellow",
  yellowLight: "yellowLight"
};

export function fabricColor(element, color) {
  return colorPrefix[element] + colorSuffix[color];
}

// MS Grid for pages
export const left = "ms-Grid-col ms-sm12";
export const right = "ms-Grid-col ms-sm0 ms-md0";

// Colors
export const bgColor = fabricColor("bg", "tealLight");
export const fontColor = "ms-fontColor-tealDark";
