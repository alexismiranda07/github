var edad=18;
if(edad>=18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}
//si es menor a 18 es menor de edad
//si es menor a 65 es adulto
//de lo contrario es adulto mayor
if(edad<18){
    console.log("es menor de edad.");
}else if(edad<65){
    console.log("es adulto");
}else{
    console.log("es adulto mayor.")
}
//&
var promedio=5,asistencia=70;
if(promedio>=4 && asistencia>=60){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}
//||
var temp=35;
if (temp<36||temp>38){
    console.log("Esta enfermo.");
}else{
    console.log("Esta normal.");
}

console.log(temp>35||temp>38?"Esta enfermo":"Esta normal");