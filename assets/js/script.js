
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 500;

const f = 2;
const a = 50;

ctx.beginPath();
for (let x = 0; x < canvas.width; x++) {
  for (let y = 0; y < canvas.height; y++) {
    const sineValue = Math.sin((x / f) * 2 * Math.PI);
    const color = `hsl(${(sineValue * a) % 360}, 50%, 50%)`;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
  }
}

// ctx.beginPath();
// ctx.arc(0, 0, 20, 0, 2 * Math.PI);
// ctx.stroke();

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
console.log(generateSineWave(1, 1));

