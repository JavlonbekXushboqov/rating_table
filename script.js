let submit=document.querySelector(".btn");
let rating=document.querySelector(".rating_table");
let x=false;
submit.onclick=function() {
    x=true;
    thanYou.style.display=`${x? "block":"none"}`;
    rating.style.display=`${x? "none":"block"}`;
}
let thanYou=document.querySelector(".thank_you_state");
thanYou.style.display=`${x? "block":"none"}`;

let mark=document.querySelectorAll(".mark");
let reallyMark=document.querySelector(".really_mark");

for(i=0;i<mark.length;i++){
    mark[i].onclick=function()
{
    let baho=this.textContent;
    reallyMark.textContent=baho;
}}


