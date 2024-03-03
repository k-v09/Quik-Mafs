
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const frequency = 2; // Frequency in Hz
const amplitude = 50; // Amplitude in pixels

for (let x = 0; x < canvas.width; x++) {
  for (let y = 0; y < canvas.height; y++) {
    // Calculate the sine of the angle for the current pixel
    const sineValue = Math.sin((x / frequency) * 2 * Math.PI);

    // Calculate the color for the current pixel based on the sine value
    const color = `hsl(${(sineValue * amplitude) % 360}, 100%, 50%)`;

    // Fill the current pixel with the calculated color
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
  }
}

