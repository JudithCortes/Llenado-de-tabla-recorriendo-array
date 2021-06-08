
const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

let table = document.getElementById("table");
let tableBody = document.createElement("tbody");
tableBody.setAttribute("class", "llenado");
let btn = document.getElementById('boton');


btn.onclick = function(){

    for(let i=0; i<users.length; i++){

        let correoCompare = users[i].email;
        let compare = correoCompare.endsWith("@academlo.com");

        if(compare === true){
            
            let newTr = document.createElement("tr");
                newTr.setAttribute("class", "fila");
                tableBody.appendChild(newTr);

            let newTdName = document.createElement("td");
                newTdName.innerText = users[i].name;
                    newTr.appendChild(newTdName);

            let newTdEmail = document.createElement("td");
                newTdEmail.innerText = users[i].email;
                    newTr.appendChild(newTdEmail);

            let newTdAge = document.createElement("td");
                newTdAge.innerText = users[i].age;
                    newTr.appendChild(newTdAge);

            let newTdGender = document.createElement("td");      
                newTdGender.innerText = users[i].gender;
                    newTr.appendChild(newTdGender);

            let newTdFace = document.createElement("td");               
                newTdFace.innerText = users[i].social[0].url;
                    newTr.appendChild(newTdFace);
                    
            let newTdTwit = document.createElement("td");               
                newTdTwit.innerText = users[i].social[1].url;
                    newTr.appendChild(newTdTwit);
        }
        table.appendChild(tableBody);
    }


}

