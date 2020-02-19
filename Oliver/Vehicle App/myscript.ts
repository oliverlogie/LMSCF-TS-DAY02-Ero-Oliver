//############BASIC some variantss
// class Person { // ①
//     firstName = ""; // ②
//     myAge = ""; // ②
//     myBeruf= "";
//  constructor(firstName, myAge, myBeruf) { // ③
//         this.firstName = firstName;
//         this.myAge = myAge;
//         this.myBeruf = myBeruf
//     }
//     name() { // ④
//         return `My name is ${this.firstName}  and i am ${this.myAge} and i am a ${this.myBeruf}`;
//     }
//     whoAreYou() { // ④
//         return `Hi , ${this.name()}`; // ⑤
//     }
//  }
//  let fullName = new Person ("Mario", 23, "developer")
//  console.log(fullName.name());
//  console.log(fullName.whoAreYou());
// class mySElary extends Person { // ①
//     gehalt = ""; // ②
//     constructor(firstName, lastName, myBeruf, gehalt) {
//         super(firstName, lastName, myBeruf); // ③
//         this.gehalt = gehalt;
//     }
//     whoAreYou() { // ④
//         return `${super.whoAreYou()} and i earn ${this.gehalt}`; // ⑤
//     }
//  }
//  let selary = new mySElary("Mario", 23, "developer", 1500);
//     console.log(selary.whoAreYou());
// class Man {
//     fName = "";
//     lName = "";
//     constructor(fName,lName){
//         this.fName = fName;
//         this.lName = lName;
//     }
//     printName(){
//         return `My name is ${this.fName} ${this.lName}`
//     }
// }
// let ganzeName = new Man("Ero", "Alekov")
// console.log(ganzeName.printName())
// class moreInfo extends Man {
//     myAge = 22;
//     jobTitle = "";
//     constructor(fName, lName, myAge, jobTitle){
//         super(fName, lName)
//         this.jobTitle = jobTitle
//     }
//     ganzeInfo(){
//         return `${super.printName()} and i am ${this.myAge} and i work as ${this.jobTitle}`
//     }
// }
// let dieGanzeInfo = new moreInfo("Ero", "Alekov",this.myAge,"Nothing" )
// document.write(dieGanzeInfo.ganzeInfo())
class Vehicles{
    carName = "";
    carDesc = "";
    carPrice = "";
    imgCar;
    constructor(carName, carDesc, carPrice,imgCar?){
        this.carName = carName;
        this.carDesc = carDesc;
        this.carPrice = carPrice;
        this.imgCar = (imgCar) ? imgCar : "car.png";
    }
    carBody(){
        return`<div id="container" class="col-lg-5 media text-dark p-3 mb-5">
        <img class="media-left pr-3" alt="Image" src="${this.imgCar}">
        <div class="media-body">
            <h3>${this.carName}</h3>
            <div id=hideInfo>
            <p class="cardText">${this.carDesc}</p>
            <p class="cardText">${this.carPrice}</p>
            </div>
            <button type="submit" class="p-3" id="button">More Infos</button>
        </div>
    </div>`
    }
}
let carMedia = new Vehicles("Mercedes", "Die  beste auto", 210000)
document.write(carMedia.carBody())

$(document).ready(function(){
    $("#button").on('click', function(){
        $("#hideInfo").toggle();
    })
})








// var Name = "serri";
// if(Name){
//     console.log(Name);
// }else {
//     console.log("i don't have info")
// }
// (Name) ? console.log(Name) : console.log("i don't have info");