function displayPets(){
    let div=document.getElementById("petList");
    let card="";
    for(i=0;i<pets.length;i++){
        card+= `
        <div class="card col-3">
            <div class="card-body">
                <h5>${pets[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${pets[i].breed}</h6>
                <p class="card-text"></p>
                <p class="card-text">${pets[i].gender == "Male" ? "Male ♂️" : "Female ♀️" } , ${pets[i].age}</p>
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
        `;
    }

    div.innerHTML= card;
}

function displayInfo(){
    document.getElementById("display").innerHTML=`<p>Total Registered pets: ${pets.length}</p>`;
}



function displayRow(){

}

function findOldestPet(){
    
}