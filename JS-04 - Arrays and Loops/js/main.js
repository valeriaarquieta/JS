let fila=["Sofia","David","Juan"];
console.log("part 1");
console.log(fila);
fila.push("Sara");
fila.push("Agustin");
fila.shift();
console.log("part 2");
console.log(fila);
fila.slice(1,0,"Renata");
fila.push("Elena");
console.log("part 3");
console.log(fila);
//*Excercise 2
function torre(numPisos) {
    for (let i = 0; i < numPisos; i++) {let piso = "";
      for (let j = 0; j < i + 1; j++) {piso = piso + "*";
      }console.log(piso) }} torre(5);
  //*Excercise 3.1
  let xValue =3;
while (xValue>=0) {console.log(xValue);
    xValue-=0.5;}
      //*Excercise 3.2
     function Oddnumbers(){
      for(let inicio=1; inicio<=100; inicio +=2){console.log(inicio);}}
      //*Excercise 3.3
      let numCorchete=6;
      while (numCorchete>=1) {console.log("["+numCorchete+"]");
      numCorchete-=1; 
      }
       //*Excercise 3.4
    
let numDeVeces = 5;
let sum = 0;
for (let i = 1; i <= numDeVeces; i++) {
    sum += i;
}

console.log(sum);

