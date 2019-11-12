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

document.body.eventListener('keydown', init);

function init(e) {
    const key = e.key;
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





