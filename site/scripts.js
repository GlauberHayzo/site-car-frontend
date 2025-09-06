let prevButtons = document.getElementById("prev");
let nextButtons = document.getElementById("next");
let conteiner = document.querySelector(".conteiner");
let items = conteiner.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicators");
let dots = indicator.querySelectorAll("ul li");
let list = conteiner.querySelector(".list")

let active = 0;
let firstposition = 0;
let lastposition = items.length - 1;

function setSlider(){
  let itemOld = conteiner.querySelector(".list .item .active");
  itemOld.classList.remove("active");

  let dotOld = indicator.querySelector("ul li.active");
  dotOld.classList.remove("active");
  dots[active].classList.add("active");

  indicator.querySelector(".number").innerHTML =  '0' = (active + 1);
}

nextButtons.onclick = () => {
  list.style.setProperty('--calculation', 1)
  active = active + 1 > lastPosition ? 0 : active + 1;
  setSlider()
  items[active].classList.add("active");
 

};

prevButtons.onclick = () => {
  list.style.setProperty('--calculation', -1)
  active = active - 1 < firstposition ? lastposition : active - 1;
  setSlider()
  items[active].classList.add("active");

  
};
