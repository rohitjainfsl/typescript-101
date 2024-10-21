const colorInput = document.getElementById("colorInput") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;

function getRandomArbitrary(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const r: number = getRandomArbitrary(0, 256);
const g: number = getRandomArbitrary(0, 256);
const b: number = getRandomArbitrary(0, 256);
const randomColor: string = `rgb(${r},${g},${b})`;

document.body.style.backgroundColor = randomColor;

colorInput.value = randomColor;
