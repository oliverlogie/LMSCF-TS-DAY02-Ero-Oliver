class Person {
  FirstName:string = "";
  LastName:string = "";

constructor (FirstName, LastName){
  this.FirstName = FirstName;
  this.LastName = LastName;
  }
  name(){
    return `My name is ${this.FirstName} ${this.LastName}.`;
  }
}
let fullName = new Person("Micheal" ,"Jordan");
console.log(fullName.name());

class infos extends Person {
  title:string ="";
  salary:string = "";

  constructor(FirstName, LastName, title, salary){
    super (FirstName, LastName);
    this.title = title;
    this.salary = salary;
  }
  moreinfos(){
    return `${super.name()} I am a ${this.title} and I earn ${this.salary}`
  }
}
let INFO = new infos("Micheal", "Jordan", "Developer", 3000)
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