
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 700;
canvas.height = 500;

const frequency = 2;
const amplitude = 50;

ctx.beginPath();
for (let x = 0; x < canvas.width; x++) {
  for (let y = 0; y < canvas.height; y++) {
    // Calculate the sine of the angle for the current pixel
    const sineValue = Math.sin((x / frequency) * 2 * Math.PI);

    // Calculate the color for the current pixel based on the sine value
    const color = `hsl(${(sineValue * amplitude) % 360}, 50%, 50%)`;

    // Fill the current pixel with the calculated color
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
  }
}

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
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
      wave.push(amplitude * Math.sin(i * 2 * Math.PI * frequency));
    }
    return wave;
}
