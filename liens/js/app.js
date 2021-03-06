let search = location.search;
let searchParams = new URLSearchParams(search);

function getValue(id) {
  document.getElementById(id).innerHTML = searchParams.get(id);
}

for (let p of searchParams.keys()) {
  getValue(p);
}
