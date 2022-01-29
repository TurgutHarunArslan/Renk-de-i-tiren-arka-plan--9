const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = [
    "black",
    "yellow",
    "green",
    "#c7bf67",
    "#7b55cf",
    "#de4747",
    "#2963ab",
  ];

button.addEventListener("click", changeBackground)

function changeBackground(){

 const RastgeleSayi = Math.floor(Math.random() * colors.length);
const SecilenRenk = colors[RastgeleSayi];
console.log(RastgeleSayi, SecilenRenk);
body.style.backgroundColor = SecilenRenk; 

}