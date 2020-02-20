var main_lis = document.querySelectorAll('.mainnav > li');
//einzeln durchgehen
for(var i = 0; i < main_lis.length; i++) {
    //mousenter
    main_lis[i].addEventListener('mouseenter', function(_e){
        //das zugehörige untermenüpunk ul selektieren und die klasse mainnav--open hinzufügen
        _e.target.querySelector('ul').classList.add('mainnav--open');
    });
    main_lis[i].addEventListener('mouseleave', function(_e){
        //das zugehörige untermenüpunk ul selektieren und die klasse mainnav--open entfernen
        _e.target.querySelector('ul').classList.remove('mainnav--open');
    });
}

class People{
	personQuote:string ="";
	personName:string ="";
	personAge:string = "";
	personLocation:string ="";
	personHobbies:string ="";
	personFavorite:string="";
	personIMG:any="";
	constructor(personQuote, personName, personAge, personLocation, personHobbies, personFavorite,personIMG){
		this.personQuote= personQuote;
		this.personName=personName;
		this.personAge=personAge;
		this.personLocation=personLocation;
		this.personHobbies=personHobbies;
		this.personFavorite=personFavorite;
		this.personIMG=personIMG;
	}
	profilePerson(){
		return `<div id="content" class="col-lg-3 mb-5 mt-5 space">
		<img class="" alt="Image" src="${this.personIMG}">
		<p class="hideQuote">${this.personQuote}</p>
		<div class="hideInfo">
		<p>Name: ${this.personName}</p>
		<p>Age: ${this.personAge}</p>
		<p>Location: ${this.personLocation}</p>
		<p>Hobbies: ${this.personHobbies}</p>
		<p>Favorite Music: ${this.personFavorite}</p>
		</div>
		</div>`
	}
}
let mediaPerson = new People("I love dogs","Brate Pitt","33","LA USA","acting", "Kayne West","img/boy1.jpg" )
let mediaPerson1 = new People("I love cats","Miranda Spicy","25","NYC USA","Janitor", "Ariana Grande","img/girl1.jpg" )
let mediaPerson2 = new People("I love monkey","Rafael Nadal","55","Mexico","Singer", "Justin Bieber","img/boy2.jpg" )
let mediaPerson3 = new People("I love kids","Angelia Julie","43","London","Uber driver", "Micheal Jackson","img/girl2.jpg" )
let mediaPerson4 = new People("I hate Brate Pitt","Micheal Jackson","60","China","dead", "my own","img/boy3.jpg" )
let mediaPerson5 = new People("I love myself","Kim Kardashian","14","LA USA","rich", "Linkin Park","img/girl3.png" )
let mediaPerson6 = new People("Money,money,money","Kayne West","46","South-africa","doctor", "Kayne West","img/boy4.jpg" )
let mediaPerson7 = new People("I my the Queen","Megan Markle","25","Manchester","Queen", "Irish folk","img/girl4.jpg" )
document.getElementById("flexi").innerHTML += mediaPerson.profilePerson();
document.getElementById("flexi").innerHTML += mediaPerson1.profilePerson();
document.getElementById("flexi").innerHTML += mediaPerson2.profilePerson();
document.getElementById("flexi").innerHTML += mediaPerson3.profilePerson();
document.getElementById("flexi").innerHTML += mediaPerson4.profilePerson();
document.getElementById("flexi").innerHTML += mediaPerson5.profilePerson();
document.getElementById("flexi").innerHTML += mediaPerson6.profilePerson();
document.getElementById("flexi").innerHTML += mediaPerson7.profilePerson();



