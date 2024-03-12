function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    }

var Amitabh = new Person("Amitabh",40)
console.log(Amitabh)

var Gleeko = new Person("Gleeko",35)
console.log(Gleeko)

class PersonClass{
    constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    }
}

var Person3 = new PersonClass("Person3",32)
console.log(Person3)