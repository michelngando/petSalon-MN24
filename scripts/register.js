console.log("register");
let pets =[];

let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");

// creating the obj constructor
function Pet(name,age,gender,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
}

function register(){
    //console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    if(isValid(newPet)){
        pets.push(newPet);
        clearform();
        displayPets();
    }else{
        alert("Please fill out all the fields!");
    }    
}
    displayInfo();

function isValid(aPet){
    let validation = true;

    if(aPet.name === ""){
        validation=false;
    }

    if(aPet.gender === ""){
        validation=false;
    }
}


 function clearform(){

 }

function init(){
    //create objs
    let pet1 = new Pet("Scooby",99,"Male","Bulldog");
    let pet2 = new Pet("Scrappy",80,"Male","Mixed");
    let pet3 = new Pet("Tweety bird",99,"Male","Canarian");
    pets.push(pet1,pet2,pet3);
    console.log(pets);

    displayInfo();
    displayPets();
}

window.onload=init; //render the HTML