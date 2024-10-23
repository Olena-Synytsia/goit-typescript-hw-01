// function showMessage(message) {
//   console.log(message);
// }

function showMessage(message: string): void {
  console.log(message);
}

showMessage("Hello, world!");

// function calc(num1, num2) {
//   return num1 + num2;
// }

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// function customError() {
//   throw new Error("Error");
// }

function customError(): never {
  throw new Error("Error");
}
