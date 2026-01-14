import { writeToFile } from "./write.js";

const sayHello = (name = "user") => {
  return `Hello, ${name}!`;
};

const rizki = sayHello("Rizki");
console.log(rizki);

const user = sayHello();
console.log(user);

const data = {
  name: "Andi",
  age: 21,
  address: "Gatau",
};

writeToFile("data.json", JSON.stringify(data, null, 2));
