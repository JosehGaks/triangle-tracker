function submit(){
  var side1=parseInt(document.getElementById("firstside").value);
  var side2=parseInt(document.getElementById("secondside").value);
  var side3=parseInt(document.getElementById("thirdside").value);

 if ((side1+side2>side3) && (side1+side3>side2) && (side2 + side3 > side1)){
   if(side1===side2 && side2===side3){
     alert("The triangle you entered is\n     ...........\n     .........\n     ..........\n     ..........\n       ..........\n     .........\n     equilateral");
      }
   else if (side1===side2 || side1===side3 || side2===side3) {
     alert("Isosceles");}
   else {
     alert("scalene");
   }
}
else {
  alert("not a triangle");
}
}
