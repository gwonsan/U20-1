function test(i) {
  let a = document.getElementsByClassName("sub_menu")[i];
  if (a.style.display == "none" || !a.style.display) {
    a.style.display = "block";
  } else a.style.display = "none";
}
function test2(k) {
  let name = "item" + k;
  console.log(name);
  let b = document.getElementsByClassName(name)[0];
  let c = b.parentElement.children;
  console.log(c);
  console.log(c.length);
  for (let i = 0; i < c.length - 1; i++) {
    c[i].style.display = "none";
  }
  b.style.display = "block";
}
function erase(a){
  console.log(a)
}