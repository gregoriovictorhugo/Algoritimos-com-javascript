function touch(){
  var userName = prompt("Olá, qual seu nome?");

  if (userName){
     document.getElementById("rockImg").src="img/Rock_happy.png";
     alert("Prazer "+userName)
  }
  // document.getElementById("rockImg").src="img/Rock_happy.png";
}
