
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 500;


/** 
@param {number} frequency - The frequency of the sine wave in "Hz"
@param {number} amplitude - The amplitude of the sine wave
@returns {number[]}
 */
function generateSineWave(frequency, amplitude) {
    const wave = [];
    for (let i = 0; i < 100; i++) {
        let q = i / 100;
        wave.push(amplitude * Math.sin(q * 2 * Math.PI * frequency));
    }
    return wave;
}
const wev = generateSineWave(1, 1);
console.log(wev);

/**
 * Draws the wave on the canvas
 * @param {number[]} vals - The array of wave values
 * @param {HTMLElement} el - The element to draw the wave on
 */
function drawWave(vals, el) {
    let center = el.height / 2;
    let maxVal = 0;
    for (let i = 0; i < vals.length; i++) {
        if (Math.abs(vals[i]) > maxVal) {
            maxVal = Math.abs(vals[i]);
        }
    }
    let maxAmplitude = (el.height - center) / maxVal;
    for (let i = 0; i < vals.length; i++) {
        let x = i / vals.length * el.width;
        let y = center + (vals[i] * el.height);
        ctx.lineTo(x, y);
    }
}
drawWave(wev, canvas);