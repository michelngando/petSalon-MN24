console.log("Assignment 1: Pet Array")


let pet1= {
name: "Lilly",
age: 3,
gender: "F",
service: "Grooming",
breed: "Labrador"
}

let pet2 = {
name: "Puppy",
age: 4,
gender: "M",
service: "Vaccine",
breed: "German Shepherd"
}

let pet3 = {
name: "Queen",
age: 1,
gender: "F",
service: false,
breed: "cat"
}

let petList = [];
petList.push(pet1,pet2,pet3);

console.log(petList.length);


function getPetInfo(){
    let list = document.getElementById("list");
    for(let i=0;i<petList.length;i++){
        console.log(petList[i].name);
        list.innerHTML+=`<li>${petList[i].name} - ${petList[i].age}</li>`;
    }
}

function getPetNumber(){
    //let number = document.getElementById("number");    
    //for(let i=0;i<petList.length;i++){        
        //number.innerHTML+=`<p>The current number of pets is ${petList.length}</p>`;
        document.getElementById("number").innerHTML+=`<p>The current number of pets is ${petList.length}</p>`;
    }

    function averPetAge(){
        for(i=0;i<petList.length;i++){
            let averPetAge = pet1.age+pet2.age+pet3.age/ petList.length
        }
            
    }
//}

getPetInfo();
getPetNumber();
averPetAge();