var inputFirst = document.querySelector(".input-first");
var inputSecond = document.querySelector(".input-second");
var butTopla = document.querySelector(".but-topla");
var butCix = document.querySelector(".but-cix");
var butVur = document.querySelector(".but-vur");
var butBol = document.querySelector(".but-bol");
var butConc = document.querySelector(".but-conc");

butTopla.addEventListener("click", function () {
    butConc.innerText = (parseInt(inputFirst.value) + parseInt(inputSecond.value)).toString();
   


});
butCix.addEventListener("click", function () {
    butConc.innerText = (parseInt(inputFirst.value) - parseInt(inputSecond.value)).toString();

});
butVur.addEventListener("click", function () {
    butConc.innerText = (parseInt(inputFirst.value) * parseInt(inputSecond.value)).toString();

});
butBol.addEventListener("click", function () {
    butConc.innerText = (parseInt(inputFirst.value) / parseInt(inputSecond.value)).toString();
});