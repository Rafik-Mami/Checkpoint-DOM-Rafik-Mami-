/**delete function**/
const list = document.querySelector(".prod");
list.addEventListener("click", function (e) {
  if (e.target.className == "btn-delete") {
    const x = e.target.parentElement;
    list.removeChild(x);
  }
});

/*initial quantity*/
let x = document.querySelectorAll(".qte");
let qts = Array.from(x);

for (let qt of qts) {
  qt.setAttribute("value", 1);
} 


/**icon favoris */
let favoris = document.querySelectorAll(".fa-heart");
let Arrayfavoris = Array.from(favoris);

for (let x of Arrayfavoris) {
  x.addEventListener("click", function (e) {
    x.style.setProperty("color", "Fuchsia");
  });
}
/**initial price */
document.querySelector('.price-1').innerHTML=500;
document.querySelector('.price-2').innerHTML=500;
document.querySelector('.price-3').innerHTML=500;


/**boutton plus */
for (let i = 1; i < 4; i++) {
  document.querySelector(`.btn-${i} .btnplus`).addEventListener("click", function (e) {
      let x = Number(document.querySelector(`.qte-${i}`).getAttribute("value"));
      document.querySelector(`.qte-${i}`).setAttribute("value", x + 1);
      

      let total = document.querySelector(`.total-price`).innerHTML;

      total = Number(total) + 500;
      document.querySelector(`.total-price`).innerHTML = total;
    });
}
/*bouton minus*/
for (let i = 1; i < 4; i++) {
  document.querySelector(`.btn-${i} > .btnmoin`).addEventListener("click", function (e) {
      let actualvalue = Number(document.querySelector(`.qte-${i}`).getAttribute("value"));
      if (actualvalue > 1) {
        document.querySelector(`.qte-${i}`).setAttribute("value", actualvalue - 1);
      } else {
        document.querySelector(`.qte-${i}`).setAttribute("value", 1);
      }
    
  let total = document.querySelector(`.total-price`).innerHTML;
    
  if (Number(total) >=2000) {
    total = Number(total)-500;
  }
  document.querySelector(`.total-price`).innerHTML = total;
} );}