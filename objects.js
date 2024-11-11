class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
}

const x = new User("Checco", "Zalone", 47, "Bari");
console.log(x);
const y = new User("Enzo", "Salvi", 52, "Roma");
console.log(y);

const older = function () {
  if (x.age > y.age) {
    console.log("x è più vecchio di y");
  } else {
    console.log("y è più vecchio di x");
  }
};
older();
