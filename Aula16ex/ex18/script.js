let num = document.getElementById("fnum");
let lista = document.getElementById("flista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `O valor ${num.value} foi adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor inválido ou já encontrado em lista");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Favor adicionar valores a lista!");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      soma += valores[pos];
      media += valores[pos] / valores.length;
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }

    res.innerHTML = "";
    res.innerHTML += `<p> Ao todo temos ${tot} elementos. </p>`;
    res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`;
    res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`;
    res.innerHTML += `<p> A soma dos valores informados é ${soma}. </p>`;
    res.innerHTML += `<p> A média dos valores informados é ${media}. </p>`;
  }
}
