console.log("started script");
let numberToQ;
let doneTo;
let goTime;
let directLink = "https://www.toprevenuegate.com/guuamkkf?key=2cfff4b9c8b657c28e1dafd2d73f650e";
function addNumberToQueue(num) {
    fetch(`https://kvdb.io/7W8WYYhyFEsSmQPWVri4Zs/numToQueue/${num}`, {
        method: "POST",
        body: num
    });
    return true;
}

/*
function checkNumIfIsInQueue(num){
    var bool = fetch(`https://kvdb.io/7W8WYYhyFEsSmQPWVri4Zs/kvs/${num}`);
}
*/

document.getElementById("addBtn").addEventListener("click", () => {  document.getElementById("numQ").style.border = "#07ed13 2px solid";
    var numQ = document.getElementById("numQ").value;
    if (!numQ || numQ.trim() === "") {       document.getElementById("numQ").style.border = "#ed0707 2px solid";
  document.getElementById("erl").innerHTML = "Please Enter Your Valid 10 digit Phone Number!";
  document.getElementById("erl").style.color ="#ed0707";
window.location.href = "#numQ";
        return;
    }
numberToQ = numQ;
document.getElementById("numQ").value = "";

document.getElementById("toDo").style.display = "block";

document.querySelector(".main_div").style.display= "none";                                                       
   document.getElementById("showSharNum").innerHTML = numberToQ;                                                                
doneTo = 0;                         });

document.getElementById("shareBtn").addEventListener("click", () => {
goTime = Date.now();
  window.location.href="whatsapp://send?text=To Get Free Recharge click => https://jio-reward.github.io/";
}); 

document.addEventListener("visibilitychange", () => {
  if(!goTime || goTime == 0){ return; }
  if (document.visibilityState === "visible") {
if(Date.now() - goTime > 5000){
console.log(true)
  if(doneTo < 100){
  doneTo += 20;
    goTime = 0;
    if(doneTo == 100 || doneTo > 100){
document.getElementById("progress_txt").innerHTML = `Progress: ${doneTo}% (completed)`;
document.querySelector(".progress-bar").style.width = "100%";
document.getElementById("toDo").style.display = "none";
document.getElementById("success_div").style.display = "block";
       addNumberToQueue(numberToQ);
    }else{    document.getElementById("progress_txt").innerHTML = `Progress: ${doneTo}%`;
document.querySelector(".progress-bar").style.width = `${doneTo}%`;
         }
  }else{
    document.getElementById("progress_txt").innerHTML = `Progress: ${doneTo}% (completed)`;
    document.querySelector(".progress-bar").style.width = "100%";
    document.getElementById("toDo").style.display = "none";
    document.getElementById("success_div").style.display = "block";

 addNumberToQueue(numberToQ);
  } 
  console.log(doneTo)
  }else{
  console.log(false)
  
};
  }
});


document.querySelector(".firAdDiv").addEventListener("click", () => {
window.location.href=directLink;
});

document.getElementById("numQ").addEventListener("input", (event) => {
  if(!event.target.value.match(/[0-9]/)){
    document.getElementById("numQ").style.border = "#ed0707 2px solid";
    document.getElementById("erl").innerHTML = "Please Enter Your Valid Phone Number!";
    document.getElementById("erl").style.color ="#ed0707";
    return;
  }
  
  if(event.target.value.length > 10 || event.target.value.length < 10){
    document.getElementById("numQ").style.border = "#ed0707 2px solid";
document.getElementById("erl").innerHTML = "Please Enter Your Valid 10 digit Phone Number!";
document.getElementById("erl").style.color ="#ed0707";
    return;
  }
  
  if(event.target.value.length == 10){
    document.getElementById("numQ").style.border = "#07ed13 2px solid";
    document.getElementById("erl").innerHTML = "Scroll Down And Click <strong>Proceed</strong> button :)";
document.getElementById("erl").style.color ="#07ed13";
  }
});

document.getElementById("addAnNu").addEventListener("click", () => {
  window.location.reload();
});
