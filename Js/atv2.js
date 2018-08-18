function maiorIdade(){
  var ano = document.getElementById("ano");
  console.log(ano.value);
  // o .value é utilizado para puxar o valor ou o nome contido na variavel
  var idade = 2018 - ano.value;
  console.log(idade);
  ///////////Pegar o ano do sistema
  var DataSistema = new Date();
  var anoSystema = DataSistema.getFullYear();
  console.log(anoSystema);
  idade = anoSystema - ano.value;
  console.log("Você possui: "+idade);
}
