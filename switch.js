console.log("Menu");
console.log("1. -Sumar");
console.log("2. -Restar");
console.log("3. -Multiplicar");
console.log("4. -Dividir");
console.log("5. -Salir");
console.log("Elija una opcion");
var op=Number(prompt("Seleccione una opcion"));
var a=5,b=2;
switch (op) {

     case 1:
            console.log(a+" + "+b+" = "+(a+b));   
            break;
     case 2:
            console.log(a+" - "+b+" = "+(a-b));   
            break;       
     case 3:
            console.log(a+" * "+b+" = "+(a*b));   
            break;
     case 4:
            console.log(a+" / "+b+" = "+(a/b));   
            break;
     case 5: 
          console.log("Gracias");
          break;
     default:
         console.log("No eligio una opcion valida");
         break;     
}