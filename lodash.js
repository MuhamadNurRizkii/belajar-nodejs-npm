import _ from "lodash";

const name = "Muhamad NUr rIzki";
const result = _.capitalize(name);

console.log(result);

const users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];

const barney = _.find(users, (o) => o.user === "barney");

console.log(barney);
