var tabla=2;
for(var i=1;i<=10;i++){
 document.write(tabla+" x "+i+" = "+tabla*i+"<br/>");
}
var i=1;
while(i<=10){
    console.log(tabla+" x "+i+ " = "+tabla*i);
    //i+=1;
}
i=1;
do{
    console.log(tabla+" x "+i+ " = "+tabla*i);
}while(++i<=10);