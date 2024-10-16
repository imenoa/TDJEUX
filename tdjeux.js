const prompt = require('prompt-sync')()

// //Juste prix

// let prix = 0
// let jprix = random(1, 100)
// let essai = 0
// let essaimax = 5

// console.log(jprix);

// while (prix != jprix && essai < essaimax ) {// essai de log essaimax
//   prix = Number(prompt("entre un prix"))
//   while (isNaN (prix) && prix > 100 && prix < 0){// tant que prix n'est pas un nbr et que prix superieur a 
//     //100 et que prix est inferieur a 0 alors c'est une erreur
//     prix = prompt(Number("entre un prix entre 0 et 100" ))
// }

//   if (prix < jprix) {
//     essai++
//     console.log("+");
//   } else if (prix > jprix) {
//     essai++
//     console.log("-");
//   }


// } 
// if ( prix == essaimax){
//   console.log("perdue!");
// }
// else if( prix === jprix){
//   console.log( "trouvé!");

// }
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

let choice = prompt(" tu dois prendre le Poudlard express, la voie 9/3/4 est bloqué, que décide tu: tu prends la voiture des weasley(v),tu transplanes (t)")

if (choice == "v") {
  console.log("tu arrives devant l'ecole non sans avoir endommagé un arbre vieux de 50ans");
  choice = prompt("L'entrée principale(p), Passage secret(s)")
  if (choice == "p") {
    console.log("Tu interromps la cérémonie du Choixpeaux par une entrée fracassante");
  }
  else if (choice == "s") {
    console.log("tu fais face à Rusard et Miss Teigne");
  } else {
    console.log("tu te fais kidnapper par les centaures");
  }

} else if (choice == "t") {
  console.log(" trop fière d'être capable de transplaner et impatient de raconter tes aventures tu decides de");
  choice = prompt("transplaner en toute discrétion ( d ), tu le fais face aux moldus(m)")
  while (isNaN (choice) && choice!="d" && choice != "m"){  
    choice = prompt (" Endoloris! hmm  il semble que tu es assez souffert ,tu as deux choix d ou m")
  }
  if (choice == "d") {
    console.log(" ton arrogance te mènera à ta perte, te voila désartibuler");
  }else if (choice == "m"){
    console.log("te voila désartibuler face aux regard terrifiée des moldus");}
    choice = prompt(" choisi tu l'aide d'un moldu (a), celle d'un sorcier(z)")
    while (isNaN (choice) && choice!="a" && choice != "z"){  
      choice = prompt (" veut tu gouter à un autre sort?  choisi a ou z")
    }
    if (choice == "a") {
      console.log("tu seras interné pour des expérimentation");    
    }
    else if (choice == "z"){
      console.log(" Ce sorcier n'est autre qu'un mangemort");
      choice = prompt (" tu es effrayé (e) tu réalises un de tes plus grand reve (r)")
      while (isNaN (choice) && choice!="e" && choice != "r"){  
        choice = prompt (" C'est assez tu dois aimer souffrir, Endoloris! e ou r??")
      }
      if(choice == "e"){
        console.log( "tu gardes ton calme dans l'espoir de t'en sortir (l), tu paniques( n)");
        if (choice == "l") {
          console.log("ta patience paiera");
        }else if (choice == "n")
          console.log( "AVADA KEDAVRA" );

      }
      else if (choice == "r") {
        console.log ( "Voldemort tu rencotreras et mangemort tu deviendra")
        
      }

        
      
    }


 } else {
    console.log("Tu attends sagement le retour des parents weasley");
  }

 









