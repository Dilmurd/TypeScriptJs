// console.log("start");
// // 1.Inheritence
// {
// class Person {
//     constructor(public name: string, public age: number) {}
  
//     introduce(): void {
//       console.log(`Salom, men ${this.name}, yoshim ${this.age}`);
//     }
//   }
  
//   class Employee extends Person {
//     constructor(name: string, age: number, public job: string) {
//       super(name, age);
//     }
  
//     introduce(): void {
//       console.log(`Salom, men ${this.name}, yoshim ${this.age}, kasbim: ${this.job}`);
//     }
//   }
  

//   // 2.Inheritence
//   const emp = new Employee('Ali', 30, 'Dasturchi');
//   emp.introduce();

//   class Vehicle {
//     constructor(public brand: string) {}
  
//     drive(): void {
//       console.log(`${this.brand} harakatlanmoqda.`);
//     }
//   }
  
//   class Truck extends Vehicle {
//     constructor(brand: string, public loadCapacity: number) {
//       super(brand);
//     }
  
//     drive(): void {
//       console.log(`${this.brand} yuk tashiyotgan yuk mashinasi harakatlanmoqda.`);
//     }
//   }
  
//   const myTruck = new Truck('Kamaz', 2000);
//   myTruck.drive();

//   // 3.Inheritence
//   class Animal {
//     constructor(public species: string) {}
  
//     speak(): void {
//       console.log(`${this.species} ovoz chiqaradi.`);
//     }
//   }
  
//   class Dog extends Animal {
//     constructor(species: string, public breed: string) {
//       super(species);
//     }
  
//     speak(): void {
//       console.log(`${this.species} turidagi it havlaydi.`);
//     }
//   }
  
//   const dog = new Dog('It', 'Ovcharka');
//   dog.speak();
// }

//   // Abstraction
// {
//     abstract class Vehicle {
//         abstract start(): void;
//         abstract stop(): void;
//     }
    
//     class Car extends Vehicle {
//         start(): void {
//             console.log('Mashina ishga tushdi.');
//     }
    
//     stop(): void {
//         console.log('Mashina to\'xtadi.');
//     }
// }

// class Bike extends Vehicle {
//     start(): void {
//         console.log('Velosiped ishga tushdi.');
//     }
    
//     stop(): void {
//         console.log('Velosiped to\'xtadi.');
//     }
// }

// const myCar = new Car();
// myCar.start();
// myCar.stop();
// }


// // Polymorphism
// {
//   class Animal {
//     speak(): void {
//       console.log('Hayvon ovoz chiqaradi.');
//     }
//   }
  
//   class Dog extends Animal {
//     speak(): void {
//       console.log('It havlaydi!');
//     }
//   }
  
//   class Cat extends Animal {
//     speak(): void {
//       console.log('Mushuk miyovlaydi!');
//     }
//   }
  
//   class Cow extends Animal {
//     speak(): void {
//       console.log('Sigir muylaydi!');
//     }
//   }
  
//   const animals: Animal[] = [new Dog(), new Cat(), new Cow()];
//   animals.forEach(animal => animal.speak());
  

// }


  
  