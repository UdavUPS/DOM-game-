let field = document.querySelector(".field");
let target = document.createElement("img");

target.src = "img/goblin.png";


export default function addNewTarget(position) {
  for (let i = 0; i < 16; i++) {
    if (field.children[i].firstChild) {
      field.children[i].removeChild(field.children[i].firstChild);
    }
  }
  field.children[position].appendChild(target);
}


function showTarget() {
  let ch = Math.floor(Math.random() * 15);
  addNewTarget(ch);
}

setInterval(showTarget, 1000);