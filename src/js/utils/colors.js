/*-----------------------------------------------*
 *                                               *
 *      INSERT HERE UTILS RELATET TO THEME       *
 *                                               *
 ------------------------------------------------*/

/**
 * 
 * @param {String} hex 
 * @param {Number} opacity 
 * @description Simple function that convert *hex* (#ffffff) color in rgba 
 */
export const hex2rgba = (hex, opacity = 1) => {
    const newhex = hex.replace('#', '');
    const r = parseInt(newhex.substring(0, 2), 16);
    const g = parseInt(newhex.substring(2, 4), 16);
    const b = parseInt(newhex.substring(4, 6), 16);

    const result = `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
    return result;
};
