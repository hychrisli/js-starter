// Object literals. Let's create Cat object

const cat = {
  name: "Hello Kitty",
  age: 5,
  doing: "sleeping",
  changeActivity: function (activity) {
    this.doing = activity
  },
  getIntro() {
    return `My name is ${this.name} and I'm a ${this.age}-year old cat and I am currently ${this.doing}`
  }
}

console.log(cat.name)
console.log(cat.age)
console.log(cat["doing"])
cat.changeActivity("eating")
console.log(cat.doing)
console.log(cat.getIntro())


// create class

class Pet {
  #name
  #age
  #doing

  constructor(name, age) {
    this.#name = name
    this.#age = age
    this.#doing = "idling"
  }

  getName() {
    return this.#name
  }

  getAge() {
    return this.#age
  }

  setActivity(activity) {
    this.#doing = activity
  }

  getActivity() {
    return this.#doing
  }

  getIntro() {
    return `My name is ${this.#name}. I'm ${this.#age} year old. I am enjoy ${this.#doing}`
  }

};

class Dog extends Pet {
  constructor(name, age) {
    super(name, age)
  }

  bark() {
    console.log("Woof woof")
  }
}

class Cat extends Pet {
  secretName;

  constructor(name, age, secretName) {
    super(name, age);
    this.secretName = secretName
  }

}

// Inheritance
const billyDog = new Dog("Billy", 4);
const sammyCat = new Cat("Sammy", 2, "Tuna Face");

// Abstraction
console.log(billyDog.getIntro())
console.log(sammyCat.getActivity())
sammyCat.setActivity("eating")
console.log(sammyCat.getIntro())

// Encapsulation
// console.log(billyDog.#age) // SyntaxError: Private field '#age' must be declared in an enclosing
billyDog.bark()
console.log(sammyCat.secretName)

// polymorphism
let myPet = billyDog
console.log(`pet name: ${myPet.getName()}`)
myPet = sammyCat
console.log(`new pet name: ${myPet.getName()}`)
