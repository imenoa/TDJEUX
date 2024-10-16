const prompt = require('prompt-sync')()
/*let nbrun = 5
let nbrtrois = 6

let resultat = nbrun + nbrtrois

console.log(resultat);

let stri = "imene"
let strs = "sonia"

let string = stri + strs
 
console.log( string);

let sous = nbrun - nbrtrois
console.log( sous);

let mult = nbrun * nbrtrois
console.log( mult);

let div = nbrun / nbrtrois
console.log( div);

let mod = nbrun % nbrtrois
console.log( mod );

let change = 4
console.log(change);

let nmbr = 3

let a = 5
let b = 8
let c = 0
c = a
a = b
b = c


const prompt = require('prompt-sync')()


let userpass = prompt("entrer un mdp")
let rpassword = "12345"

if ( userpass == rpassword){
    console.log("accès autorise");
}else{ 
    console.log("accès refuse");
    
}


const prompt = require('prompt-sync')() 

let a = prompt ( "entrer un premier nombre :")
let b = prompt ( "entrer un deuxième nombre :")
let c = prompt ( "entrer un troisième nombre :")

if (a>b && a>c){
    console.log("a");}
else if(b>a && b>c){
console.log(b);}
else{
    console.log(c);
    
}
let jour = prompt (" entrer un nombre entre 1 et 7")

if (jour == 1) {
    console.log("lundi");   
}else if(jour == 2){
    console.log("mardi"); 
}else if(jour == 3){
    console.log("mercredi"); 
}else if(jour == 4){
    console.log("jeudi"); 
}else if(jour == 5){
    console.log("vendredi"); 
}else if(jour == 6){
    console.log("samedi"); 
}else if(jour == 7){
    console.log("dimanche"); 
}else if(jour == 8){
    console.log("Nombre invalide"); 
}



*/





// if (nmbr <= 10) {
//   console.log(nmbr * 20);

// }else if (nmbr > 10 && nmbr <= 30){
//   console.log(10 * 20 + (nmbr - 10) * 15);
//         /* 10 x 20 reste un pallier fixe car les 10 premier cadre reste a 20 euro*/
// }else{
//   console.log(10 * 20 + 20 * 15 + (nmbr - 30) * 5);
//        /* 10 x 20 reste un pallier fixe car les 10 premier cadre reste a 20 euro
//        les 20 a 15 deviennent le deuxième palier fixe*/

// }

// let a = prompt (" nombre clavier")
// let b = prompt ("tape un deuxième ")

// if (a<b){
//     console.log(a);

// }
// else{
//     console.log(b);

// }

// let nombre = prompt ("tape deux nombre")

// // if (nombre < 0){
// //     console.log("négatif");

// // }else{
// //     console.log("positif");

// // }

// // const prompt = require('prompt-sync')() 

// // let temp = prompt ("en,tre une temperay")

// // if (temp <= 0){
// //     console.log ("glace");
// // }else if ( temp >= 0 && temp <= 100)
// //     {console.log("liquide");}
// // else { 
// //      console.log ("gazeux");
// // }


// // let concu = prompt ("numero d'arrivé")

// // while (concu != -1){
// //     console.log(concu);
// //     concu = prompt ("numero d'arrivé")
// // }

// // let somme = 0

// // for ( let i = 1; i <= 100 ; i++){
// //     somme = i + somme
// // // }

// // console.log(somme);

// // let table = prompt ("entre un nombre")

// // for ( let i = 0; i <= 10 ; i++){
// //     console.log(table*i);
// // }


// // let pyra = "1"

// // for (let i=1; i <= 5 ; i++) {
// //     console.log(pyra);
// //     pyra = pyra +"1"

//}

//  let concu = Number(prompt("numero d'arrivé"))
// let tps = Number(prompt ("tps d'arrivé"))

//  while (concu != -1){
//      console.log(concu , tps);

//  concu = Number(prompt("numero d'arrivé: "))
//   tps = Number(prompt ("tps d'arrivé"))

//  } console.log("boucle terminé");




// //  let minutes = Number(prompt( "nbr de minutes?" ))
// //  let secondes = Number(prompt ( "nbr de seconde? "))
// //  let time = 60*minutes + secondes

// //  for( let i= time ; i > 0 ; i--){
// //     console.log(i);

// //  }

// // let min = 2
// // let sec = 60

// // for ( let j= min ; j >= 0; j--){
// //     console.log(j)

// // for (let i= sec; i >= 0 ; i--) {  
// //     console.log(j,i);

// // } } 

// // let minutes = Number(prompt( "nbr de minutes?" ))
// //  let secondes = Number(prompt ( "nbr de seconde? "))
// //  let time = 60*minutes + secondes

// //  for( let i= time ; i > 0 ; i--){
// //      console.log(i);}



// // let age = prompt(Number("age de Paul?" ))

// // for(let i= 0 ; i <= age ; i++){
// //     console.log(i = i = 150 +(age*3));   
// // } 

// // let sup = 5
// // let position = 6 /* la valeur n'importe pas car elle prendra 
// // celle donnée dans la boucle for */

// // for (let i = 1; i <= 20; i++) {
// //   nombre = Number(prompt( "saisissez 20 nombres: "));/* le i correspond
// // ici à l'iteration du prompt*/

// // if ( i == 1 || nombre > sup ) { /*  le i == || permet de prendre en compte la valeur négative*/
// //   sup = nombre;/* l'iteration  reinitialise la valeur du sup avec la valeur du prompt saisie  
// //   seulement dans le cas ou la valeur est plus grande sinon l'iteration est ignoré*/
// //   position = i 
// //   }

// // }console.log(" le plus grand est: ", sup ,"saisi n°", position);

// // let petit = 0


// // for (let i = 1; i <= 3; i++) {
// //     taille = Number(prompt("saisissez les tailles: "))

// //     if (taille < 2.10) {
// //         taille = petit 
// //         petit++
// //     }

// // } console.log(petit, "mesure moins de 2.10");

// let nmbOui = 0
// let nmbNon = 0
// let nmbBlanc = 0
// let vote = ""

// for (let i = 1; i <= 6; i++) {
//     vote = prompt("cocher o, b , n")

//     if (vote == "o") {
//         nmbOui++
        
//     } if (vote == "n") {
//         nmbNon++
      
//     } if (vote == "b") {
//         nmbBlanc++
        
//     }
// } console.log(nmbOui, nmbNon, nmbBlanc);

// let oui = (nmbBlanc/6)*100
// let non = (nmbNon/6)*100
// let blanc = (nmbOui/6)*100
// console.log(oui,non,blanc);


/*
for ( i=1 ; i<=6 ; i++){
    console.log(depart+i);

    while (depart < 6) {
    depart = depart + 1
    console.log(depart);

}
    
}*/

// let depart = Number(prompt("saisir nbr: "))
// let limit = depart + 6;

// while (depart < limit) {
//     depart = depart + 1
//     console.log(depart);

// }

    
//  let paris = 50
//  let nantes = 200

//  for ( i=0 ; paris<nantes; i++){
//     paris=paris+100
//     nantes=nantes*1.12
//  }console.log(nantes, paris, i);
 
 
// let n = Number(prompt( "saisir un nbr entier: "))
// let produit=1;
// for (i=1; i<=n*2 ; i++){
//     //console.log(i);
//     //console.log(i % 2 == 0)
//     if(i % 2 == 0){
//         let result= i*i
//         //console.log(result);
//         produit= result*produit;
//     }
// }
// console.log(produit);

// let n = Number(prompt( "saisir un nbr entier: "))
// let produit=1;
// for (i=2; i<=n*2 ; i+2){
//         produit = (i % 2 == 0)?(i*i)*produit: produit;
// }
// console.log(produit);

// let n = Number(prompt("Saisir un nombre entier: "));
// let produit = 1;

// for (let i = 2; i <= n * 2; i += 2) {
//     produit *= i ** 2; // Utilisation de l'opérateur d'exponentiation
// }

// console.log(produit);

// let n = Number(prompt("Saisir un nombre entier: "));
// let produit = 1;

// for (let i = 2; i <= n * 2; i += 2) {
//     produit *= i * i;
// }

// console.log(produit);


    
     



// //EXO 7

// let nn = Number(prompt("Saisir un nombre entier: "));
// let isPremier=true;

// for (let i = 1; i <= nn ; i ++) {
    
//     if((nn/1)% 1 === 0){
//         isPremier=true;
//     }else{
//         isPremier=false;
//     }
// }

//  console.log(isPremier);
 let age = prompt(Number("age de Paul?" ))

for(let i= 0 ; i <= age ; i++){
    console.log(i = i = 150 +(age*3));   
} 