export const getContrast = (rgb, blackColor = 'black', whiteColor = 'white', factor = 200) => {
    rgb = rgb
        .split(/\(([^)]+)\)/)[1]
        .replace(/ /g, '')
        .split(',');

    const r = parseInt(rgb[0], 10)
    const g = parseInt(rgb[1], 10)
    const b = parseInt(rgb[2], 10)

    // Get YIQ ratio
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    // Check contrast
    console.log("yiq", yiq);
    return (yiq >= factor) ? blackColor : whiteColor;
};