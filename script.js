var arr = [];

function insert() {
  let x = document.getElementById("insert");
  console.log(x.value);
  arr.push(x.value);
  x.value = "";
}
function rm() {
  arr =[];
}
function trav() {
  let out = document.getElementById("out");
  out.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    console.log(e);
    out.innerHTML = out.innerHTML +" "+ e;
  }
}
