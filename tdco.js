const prompt = require('prompt-sync')()

let dosssard = 0
let time = 0

// exo1 td2

while (dossard != -1) {
    dossard = Number(prompt("entre num dossard"))
    while (isNaN(dossard) && dossard < 0)// isnan gestion d'erreur
        dossard = Number(prompt(" entre num dossard valide"))
}
while (dossard != -1) {
    time = Number(prompt("entre son temps"))
}

// ex
let choice = prompt("vous etes sur une route , deux voie s'offre à vous, prenez vous celle de gauche(a) ou celle de droite(b)")

while (choice != "b" && choice != "a") {
    choice = prompt("choisi entre a et b")
}// on veut que l'utilisateur a ces deux choix seulement
      if (choice == 'b') {
        console.log("vous avez perdu");
      }else{
        console.log("vous avez gagné");
        
      }     


//EXO2:

let minute = Number ( prompt ( "entre des min"))
while (isNaN(minute) || minute < 0)
    minute = Number ( prompt ( "entre des vrai min"))
let sec = Number ( prompt ( "entre des sec"))
while (isNaN(sec) || sec < 0)
    minute = Number ( prompt ( "entre des vrai sec"))


for ( let i= minute ; i>=0 ; i--){
    for( let j= sec; j >= 0 ; j--){
        console.log((i+ "min"+ j+ "sec"));
        
    }
    sec=59
}

// EXO3 :

let base = 0
let age = prompt(Number("age de Paul?" ))
while (isNaN(age)|| age < 0){
    age = prompt(Number("entre un age correct" ))
}


for(let i= 0 ; i <= age ; i++){
    base = base + (i*3+150);
    
} console.log(base);  

//EXO4
let nombre =0
let result=0
let position =0

for (i = 1; i < 5 ; i++){
 nombre=prompt(Number("entre un nombre" ))
    while (isNaN(nombre)|| nombre < 0){
        nombre =prompt(Number("entre un nombre correct" ))
}
    if ( nombre > result){
        result = nombre
        position = i
    }
}
console.log (result);
console.log (position);

//EXO 6

let vote = ""
let nmbOui = 0
let nmbNon = 0
let nmbBlanc = 0
let votant = 5


 for (let i = 1; i <= votant; i++) {
    vote = prompt("cocher o, b , n")
    while ( vote != "b" && vote != "o"&& vote != "n"){
        vote = prompt("cocher o, b , n nr tr trompr pas")
    }
     if (vote == "o") {
       nmbOui++
        
     } else if (vote == "n") {
       nmbNon++
      
     } else {
       nmbBlanc++     
  }
}

 console.log ((nmbOui / votant)*100 + "%");
 console.log ((nmbNon / votant)*100 + "%");
 console.log ((nmbBlanc/ votant)*100 + "%");

 //EXO7:

  let number= Number(prompt ("entre eun nombre)"))
  let isprime = true

  for ( let i=2;i<number ;i ++){
    let isprime = true
    for ( let i=2;i<number ;i ++){
        if ( number % i == 0){
            isprime = false;
            break;
        }
    }
    if (isprime == true)
    console.log(i);
    

  }



