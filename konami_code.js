// keys to press in this order
const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

// keep track of index outside of event handler
let index = 0;
document.body.addEventListener('keydown', init);

function init(event) {
    let key = event.key;
    if (key === codes[index]){
      index++;
      if (index === codes.length){
        alert("Hurray!");
        index = 0; 
      }
    } else {
      index = 0;
    }
  }





