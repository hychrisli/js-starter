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


// for in
console.log("=== for in ===")
// only the public attributes are iterable
for (const key in cat) {
  console.log(cat[key])
}


// create class

class Pet {
  #name;
  #age;
  #doing;
  location = "home"

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


// for in
console.log("=== for in ===")
// only the public attributes are iterable
for (const key in myPet) {
  console.log(myPet[key])
}


console.log("==== convert object to arrays to use HOF ===")
console.log(Object.keys(cat))
console.log(Object.values(cat))

// no private fields converted
const otherPet = new Pet("wobbles", 4)
console.log(Object.entries(myPet)) 
console.log(Object.entries(otherPet)) 

Object.entries(cat).forEach((entry) => {
  const [key, value] = entry
  console.log(key, value)
})


console.log ("==== object deconstructure ===")
const {name : catName, age} = cat // rename after destructuring helps
console.log(catName, age)

console.log("==== extract field from a list of objects ===")
const pets = [
  {name: "alab", age: 3},
  {name: "pensa", age: 2},
  {age: 5}
]

console.log(pets.map(pet => pet.age)) // access field
console.log(pets.map(({age}) => age)) // desctructuring


console.log(pets.map(pet => pet.name ?? "kitty")) // access field with default
console.log(pets.map(({name: petName = "kitty"}) => petName)) // desctructuring, rename and default


console.log("==== extract nested field from a list of objects ===")
const profiles = [
  {status: "active", personal: {name: "John", address: {city: "New York", state: "NY"}}},
  {status: "active", personal: {name: "Adrian", address: {state: "NY"}}},
  {status: "active", personal: {name: "Michael"}},
  {status: "inactive"}
]

console.log(profiles.map(profile => profile?.personal?.address?.city ?? "Anywhere"))
console.log(profiles.map(({
  personal: {
    address: {
      city = "Anywhere"
    } = {} // set it to empty object, so it can continue to look inside
  } = {}
}) => city))