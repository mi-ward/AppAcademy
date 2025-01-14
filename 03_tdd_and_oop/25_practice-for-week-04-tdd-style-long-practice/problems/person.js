class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hi ${this.name}!`
  }

  visit(person) {
    return `${this.name} visited ${person.name}`
  }

  switchVisit(person) {
    return `${person.name} visited ${this.name}`
  }

  update(person) {
    if (typeof person !== "object") {throw new TypeError("must be Object")}
    if (!person.hasOwnProperty('name') || (!person.hasOwnProperty('age'))) {throw new TypeError("must be have Name and Age")}
    this.name = person.name;
    this.age = person.age;
  }

  tryUpdate(person) {
    try {
      this.update(person);
      return true;
    }
    catch {
      return false;
    }
  }

  static greetAll(arr) {
    return arr.map((obj) => {
      return obj.sayHello();
    })
  }
}

module.exports = Person;
