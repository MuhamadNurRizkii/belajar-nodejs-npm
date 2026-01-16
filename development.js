import moment from "moment";
import { panggil, sum } from "belajar-bikin-package";
import { min, max } from "belajar-bikin-package/number";

console.log(moment().format());

const name = "Muhamad Nur Rizki";
const result = sum([1, 2]);
panggil(name);
panggil(result);

panggil(min(10, 3));
panggil(max(15, 5));

const person = [
  {
    name: "Andi",
    age: 19,
    address: "Bandung",
  },
  {
    name: "Budi",
    age: 22,
    address: "Jakarta",
  },
];

person.forEach((p) => {
  panggil(`Nama: ${p.name}`);
  panggil(`Umur: ${p.age}`);
  panggil(`Alamat: ${p.address}`);
});
