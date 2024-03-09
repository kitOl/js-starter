// function Person(name, age, spec, city) {
//   this.name = name;
//   this.age = age;
//   this.spec = spec;
//   this.city = city;
//   this.sayHello = function () {
//     console.log(
//       `Hello! My name is ${this.name}. I am age is ${this.age} and I ${this.spec} from ${this.city}.`
//     );
//   };
// }

class Person {
  constructor(name, age, speciality, city) {
    this.name = name;
    this.age = age;
    this.speciality = speciality;
    this.city = city;
  }

  sayHello() {
    console.log(
      `Hello! My name is ${this.name}. I am age is ${this.age} and I ${this.speciality} from ${this.city}.`
    );
  }
}

const petr = new Person("Petr", 28, "web-disigner", "Moscow");
console.log(petr);
petr.sayHello();
