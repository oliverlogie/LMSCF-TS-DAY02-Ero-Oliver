var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(FirstName, LastName) {
        this.FirstName = "";
        this.LastName = "";
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
    Person.prototype.name = function () {
        return "My name is " + this.FirstName + " " + this.LastName + ".";
    };
    return Person;
}());
var fullName = new Person("Micheal", "Jordan");
console.log(fullName.name());
var infos = /** @class */ (function (_super) {
    __extends(infos, _super);
    function infos(FirstName, LastName, title, salary) {
        var _this = _super.call(this, FirstName, LastName) || this;
        _this.title = "";
        _this.salary = "";
        _this.title = title;
        _this.salary = salary;
        return _this;
    }
    infos.prototype.moreinfos = function () {
        return _super.prototype.name.call(this) + " I am a " + this.title + " and I earn " + this.salary;
    };
    return infos;
}(Person));
var INFO = new infos("Micheal", "Jordan", "Developer");
console.log(INFO.moreinfos());
// class Person { // ①
//    firstName = ""; // ②
//    lastName = "";
//    myAge ="";
//    myJob =""; // ②    
// constructor(firstName, lastName, myAge, myJob) { // ③
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.myAge = myAge;
//        this.myJob = myJob;
//    }
//    name() { // ④
//        return `My name is ${this.firstName} ${this.lastName}. I am ${this.myAge} and i work as ${this.myJob}`;
//    }
//    whoAreYou() { // ④
//        return `Hi , ${this.name()}`; // ⑤
//    }
// }
// let fullName = new Person ("Micheal", "Jackson", "23", "developer");
// console.log(fullName.name());
// console.log(fullName.whoAreYou());
// class salary extends Person { // ①
//    money =""; // ②
//    constructor(firstName, lastName, myAge, myJob, money) {
//        super(firstName, lastName, myAge, myJob); // ③
//        this.money = money;
//    }
//    whoAreYou() { // ④
//        return `${super.whoAreYou()} and i earn ${this.money}`; // ⑤
//    }
// }
// let mysalary = new salary ("Micheal", "Jackson", 23, "developer", 1500);
// console.log(mysalary.whoAreYou());
