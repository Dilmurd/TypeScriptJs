var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("start");
// 1.Inheritence
{
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.introduce = function () {
            console.log("Salom, men ".concat(this.name, ", yoshim ").concat(this.age));
        };
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, age, job) {
            var _this = _super.call(this, name, age) || this;
            _this.job = job;
            return _this;
        }
        Employee.prototype.introduce = function () {
            console.log("Salom, men ".concat(this.name, ", yoshim ").concat(this.age, ", kasbim: ").concat(this.job));
        };
        return Employee;
    }(Person));
    // 2.Inheritence
    var emp = new Employee('Ali', 30, 'Dasturchi');
    emp.introduce();
    var Vehicle = /** @class */ (function () {
        function Vehicle(brand) {
            this.brand = brand;
        }
        Vehicle.prototype.drive = function () {
            console.log("".concat(this.brand, " harakatlanmoqda."));
        };
        return Vehicle;
    }());
    var Truck = /** @class */ (function (_super) {
        __extends(Truck, _super);
        function Truck(brand, loadCapacity) {
            var _this = _super.call(this, brand) || this;
            _this.loadCapacity = loadCapacity;
            return _this;
        }
        Truck.prototype.drive = function () {
            console.log("".concat(this.brand, " yuk tashiyotgan yuk mashinasi harakatlanmoqda."));
        };
        return Truck;
    }(Vehicle));
    var myTruck = new Truck('Kamaz', 2000);
    myTruck.drive();
    // 3.Inheritence
    var Animal = /** @class */ (function () {
        function Animal(species) {
            this.species = species;
        }
        Animal.prototype.speak = function () {
            console.log("".concat(this.species, " ovoz chiqaradi."));
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(species, breed) {
            var _this = _super.call(this, species) || this;
            _this.breed = breed;
            return _this;
        }
        Dog.prototype.speak = function () {
            console.log("".concat(this.species, " turidagi it havlaydi."));
        };
        return Dog;
    }(Animal));
    var dog = new Dog('It', 'Ovcharka');
    dog.speak();
}
// Abstraction
{
    var Vehicle = /** @class */ (function () {
        function Vehicle() {
        }
        return Vehicle;
    }());
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        function Car() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Car.prototype.start = function () {
            console.log('Mashina ishga tushdi.');
        };
        Car.prototype.stop = function () {
            console.log('Mashina to\'xtadi.');
        };
        return Car;
    }(Vehicle));
    var Bike = /** @class */ (function (_super) {
        __extends(Bike, _super);
        function Bike() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Bike.prototype.start = function () {
            console.log('Velosiped ishga tushdi.');
        };
        Bike.prototype.stop = function () {
            console.log('Velosiped to\'xtadi.');
        };
        return Bike;
    }(Vehicle));
    var myCar = new Car();
    myCar.start();
    myCar.stop();
}
{ }
