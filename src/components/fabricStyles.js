export const colorPrefix = {
        'bg': 'ms-bgColor-',
        'font': 'ms-fontColor-',
        'border': 'ms-borderColor-'
    };

//Todo: implement KeyMirror for this object
export const colorSuffix = {
        /*'themeDarker': 'themeDarker',
        'themeDark': 'themeDark',
        'ThemeDarkAlt': 'ThemeDarkAlt',
        'themePrimary': 'themePrimary',
        'themeSecondary': 'themeSecondary',
        'themeTertiary': 'themeTertiary',
        'themeLight': 'themeLight',
        'themeLighter': 'themeLighter',
        'themeLighterAlt': 'themeLighterAlt',*/
        'black': 'black',
        /*'neutralDark': 'neutralDark',
        'neutralPrimary': 'neutralPrimary',
        'neutralSecondary': 'neutralSecondary',
        'neutralSecondaryAlt': 'neutralSecondaryAlt',
        'neutralTertiary': 'neutralTertiary',
        'neutralTertiaryAlt': 'neutralTertiaryAlt',
        'neutralLight': 'neutralLight',
        'neutralLighter': 'neutralLighter',
        'neutralLighterAlt': 'neutralLighterAlt',*/
        'white': 'white',
        'yellow': 'yellow',
        'yellowLight': 'yellowLight',
        'orange': 'orange',
        'orangeLight': 'orangeLight',
        'orangeLighter': 'orangeLighter',
        'redDark': 'redDark',
        'red': 'red',
        'magentaLight': 'magentaLight',
        'magenta': 'magenta',
        'magentaDark': 'magentaDark',
        'purpleLight': 'purpleLight',
        'purple': 'purple',
        'purpleDark': 'purpleDark',
        'blueLight': 'blueLight',
        'blueMid': 'blueMid',
        'blue': 'blue',
        'blueDark': 'blueDark',
        'tealLight': 'tealLight',
        'teal': 'teal',
        'tealDark': 'tealDark',
        'greenLight': 'greenLight',
        'green': 'green',
        'greenDark': 'greenDark',
        'info': 'info',
        'success': 'success',
        'alert': 'alert',
        'error': 'error'
    };

export function fabricColor (element, color) {
    return colorPrefix[element] + colorSuffix[color];
}

// MS Grid for pages
export const left = "ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg12 ms-u-xl8";
export const right = "ms-Grid-col ms-u-hiddenLgDown  ms-u-xl4";

// Colors
export const bgColor = fabricColor('bg', 'tealLight');
export const fontColor = 'ms-fontColor-tealDark';
