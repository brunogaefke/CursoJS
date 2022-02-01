function tabuada() {
  let num = document.getElementById("txtnum");
  let tab = document.getElementById("seltab");

  if (num.value.length == 0) {
    alert("ERROR! Verifique os dados e tente novamente");
  }
  let n = Number(num.value);
  tab.innerHTML = "";
  for (let c = 1; c <= 10; c++) {
    let item = document.createElement("option");
    item.text = `${n} x ${c} = ${n * c}`;
    item.value = `tab${c}`;
    tab.appendChild(item);
  }
}
