console.log("Welcome to session 1");

//--- ARRAYS ---
let fruits = ["apple", "banana", "orange"];
console.log(`This is an array: ${fruits}`);
console.log(fruits);
console.table(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1] = "Cherry"
console.table(fruits);

//array length

console.log(fruits.length);

//add and remove items

fruits.push("watermelon"); //adding at the end
console.log(fruits);

fruits.pop(); //removes from the end
fruits.pop();
console.log(fruits);

fruits.unshift("grapes");//adding at the beginning
console.log(fruits);

fruits.shift(); //remove from the beginning
console.log(fruits);


let studentNames = ["Nila", "Luna", "Jaden", "Michel", "Brad"];

for(let i=0;i<5;i++){
    console.log(studentNames[i])
}

for(let i=0;i<studentNames.length;i++){
    console.log(studentNames[i]);
}

// --- OBJECTS {} ----
// An obj is a collection of key-pair values
// we can have the data together in a structured way

//obj litteral
let person = {
    name: "Mike",
    lastName:"Scott",
    age:40,
    isStudent:false
}

// accessing the properties in an obj
console.log(`The person name is ${person.name}`);
console.log(`The person age is ${person[`age`]}`);
console.log(person.lastName);
console.log(person.isStudent);

let student1 = {
    name:"Leopoldo",
    age:99,
    email:"leo@sgkdku.edu",
    address:"742 evergreen terrace springfliend, USA"
}

console.log(student1);

let student2 = {
    name:"Mike",
    age:25,
    email:"mike@sgkdku.edu",
    address:"746 evergreen terrace springfliend, USA"
}

let student3 = {
    name:"Brad",
    age:27,
    email:"brad@sgkdku.edu",
    address:"749 evergreen terrace springfliend, USA"
}

let student4 = {
    name:"Wilbert",
    age:30,
    email:"wilbert@sgkdku.edu",
    address:"750 evergreen terrace springfliend, USA"
}

console.log(student3);

// let's create an array and add the students

let studentList =[];   
/* we can also add them directly to the array:
let studentList = [student1,student2,student3,student4] */
studentList.push(student1,student2,student3,student4);

console.log(studentList);

console.log("student List: " +studentList.length);

document.getElementById("display").innerHTML="Student List: " +studentList.length;

console.log(`email: ${student1.email}, address: ${student1.address}`);
console.log(`email: ${studentList[0].email}, address: ${studentList[0].address}`);

//display the students names on the console
function getStudentNames(){
    let list = document.getElementById("list");
    for(let i=0;i<studentList.length;i++){
        console.log(studentList[i].name);
        list.innerHTML+=`<li>${studentList[i].name}</li>`;
    }
}

getStudentNames();