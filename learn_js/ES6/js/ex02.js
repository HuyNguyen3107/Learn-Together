// Classes

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   getName() {
//     return this.name;
//   }

//   getEmail() {
//     return this.email;
//   }
// }

// const user = new User("huy", "huy@gmail.com");
// console.log(user.getEmail());

class Animal {
  //   private
  #email;
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
    this.#email = "huy@gmail.com";
  }

  getColor() {
    return this.color;
  }

  getWeight() {
    return this.weight;
  }

  static className = "Animal";

  static getClassName = () => {
    return this.className;
  };

  get email() {
    return this.#email;
  }

  set email(value) {
    this.#email = value;
  }
}

class Dog extends Animal {
  constructor(color, weight, legNumber) {
    super(color, weight);
    this.legNumber = legNumber;
  }
}

const dog = new Dog("yellow", 15, 4);
// console.log(dog.getWeight());
// console.log(dog.color);
dog.email("duy@gmail.com");
console.log(dog.email);

// // dog.email asdasd

// // console.log(dog.className);

// console.log(Dog.className);

// console.log(Dog.getClassName());
