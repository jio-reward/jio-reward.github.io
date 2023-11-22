console.log("started script");
let isLoggged = document.cookie.isLogged ? document.cookie.isLogged : false;
let isSpin = document.cookie.isSpin ? document.cookie.isSpin : false;
let winPrize document.cookie.winningPrize ? document.cookie.winningPrize : "💩";

function addNumberToQueue(num){
  fetch(`https://kvdb.io/7W8WYYhyFEsSmQPWVri4Zs/kvs_/${num}`, {
method: "POST",
body: num
});
  return true;
}
/*
function checkNumIfIsInQueue(num){
var bool = fetch(`https://kvdb.io/7W8WYYhyFEsSmQPWVri4Zs/kvs_/${num}`);
  
}*/

document.getElementById("addBtn").addEventListener("click", () => {
console.log("clicked");
});
