import init, { brighten_pixel } from "./pkg/rusty_test.js";

async function run() {
  await init();

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // draw gradient
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, "rgb(50,50,50)");
  gradient.addColorStop(1, "rgb(200,200,200)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // brighten pixels using Rust
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = brighten_pixel(data[i]);
    data[i + 1] = brighten_pixel(data[i + 1]);
    data[i + 2] = brighten_pixel(data[i + 2]);
  }

  ctx.putImageData(imageData, 0, 0);
}

run();
