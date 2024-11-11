class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
}

const x = new User("Checco", "Zalone", 47, "Bari");
console.log("Checco", x);
const y = new User("Enzo", "Salvi", 52, "Roma");
console.log("Er Cipolla", y);

const older = function () {
  if (x.age > y.age) {
    console.log("x è più vecchio di y");
  } else {
    console.log("y è più vecchio di x");
  }
};
older();

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}

const petDataArray = function () {
  const petName = document.getElementById("pname");
  let petNameValue = petName.value;
  localStorage.setItem("pname", petNameValue); // Salva solo una volta
  console.log(petNameValue); // Mostra il valore nella console
};

/*const sameOwner = function(){

}
sameOwner();*/
