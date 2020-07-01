import { Invoice } from "./classes/Invoice";
import { ListTemplate } from "./classes/ListTemplate";
import { HasFormatter } from "./interfaces/HasFormatter";

//==========================================================
// Array & Object type
//==========================================================

let country: { name: string }[] = [];

country = [{ name: "India" }];

console.log(country);

//==========================================================
// Function
//==========================================================
let divide = (a: number, b: number, c?: number): void => {
  console.log(a / b, "divide");
  console.log(c, "c");
};

divide(10, 2);

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(5, 5), "multiple");

//==========================================================
// Type Alias
//==========================================================
type StringOrNum = string | number;

let testAlias: StringOrNum = "alias type";

console.log(testAlias, "type");

//==========================================================
// Function Signature
//==========================================================
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

//==========================================================
// DOM and Type Casting
//==========================================================
const form = document.querySelector(".form-one") as HTMLFormElement;
const inputEmail = document.querySelector("#email") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(inputEmail.value);
});

//==========================================================
// Class
//==========================================================
const invoOne = new Invoice("Ninja", 100, "shuriken throw");

const invoArr: Invoice[] = [];
invoArr.push(invoOne);

console.log(invoArr);

//==========================================================
// Interface
//==========================================================
interface isPerson {
  name: string;
  speak(a: string): void;
}

const Alex: isPerson = {
  name: "Alex Clue",
  speak(name) {
    console.log(name);
  }
};

console.log(Alex, "interface");

//==========================================================
// Interface with class
//==========================================================
let doc: HasFormatter;

doc = new Invoice("Martin", 200, "coin flip");

console.log(doc.format(), "Interface with class");

//==========================================================
// HTML Class Template
//==========================================================
let ulNode = document.querySelector("ul")!;
const ul = new ListTemplate(ulNode);
const textLi: string[] = ["First", "Second", "Third"];
textLi.forEach(element => {
  ul.createItem(element);
});

//==========================================================
// GENERICS
//==========================================================
const addUID = <T extends object>(obj: T) => {
  const uid = parseInt((Math.random() * 999999).toFixed(), 10);
  return { ...obj, uid };
};

let uidDoc = addUID({ name: "Chris" });
console.log(uidDoc);

//==========================================================
// GENERICS with Interface
//==========================================================

interface Resource<T> {
  name: string;
  data: T;
}

let resDoc: Resource<{ uid: number }> = {
  name: "Micheal",
  data: {
    uid: 885695
  }
};

console.log(resDoc, "Generic with interface");
