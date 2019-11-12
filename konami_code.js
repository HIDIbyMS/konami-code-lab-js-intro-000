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

function init("keydown", function(event)) {}




{
// your code here - attach event listener to document.body and check for 'keydown' events
const key = e.key;
if (key === codes[index]){
  index++;
  if(index === codes.length){
    alert("Hurray!");
    index = 0;
  }
} else {
  index = 0;
}


  // if user presses all 10 keys in correct order alert() congratulations
  // if not pressed correctly no alert keep listening for ten keydown in correct order

}

