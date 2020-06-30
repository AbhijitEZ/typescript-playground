// Array & Object type
let country: { name: string }[] = [];

country = [{ name: "India" }];

console.log(country);

// Function
let divide = (a: number, b: number, c?: number): void => {
  console.log(a / b, "divide");
  console.log(c, "c");
};

divide(10, 2);

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(5, 5), "multiple");

// Type Alias

type StringOrNum = string | number;

let testAlias: StringOrNum = "alias type";

console.log(testAlias, "type");

// Function Signature

let greet: (a: string, b: string) => void;

greet = (a, b) => {
  console.log(a + b);
};

greet("hello", "type defs");

let funcSign: (obj: { name: string }) => void;

funcSign = obj => {
  console.log(obj);
};

funcSign({ name: "func sign" });

// DOM and Type Casting

const form = document.querySelector(".form-one") as HTMLFormElement;
const inputEmail = document.querySelector("#email") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(inputEmail.value);
});

// Class

class Invoice {
  client: string;
  money: number;

  constructor(c: string, m: number) {
    this.client = c;
    this.money = m;
  }
}

const invoOne = new Invoice("Ninja", 100);

const invoArr: Invoice[] = [];
invoArr.push(invoOne);
