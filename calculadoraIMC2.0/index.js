function calcularIMC(altura, peso) {
  peso = Number(document.querySelector("#peso").value);
  altura = Number(document.querySelector("#altura").value);
  var res = document.querySelector("#res");
  res.innerHTML = "";

  if (altura === 0 || peso === 0 || isNaN(altura) || isNaN(peso)) {
    res.innerHTML =
      "<p>Amigo, <strong>insira dados</strong> nos campos acima, se não será impossível calcular!</p>";
  } else {
    var IMC = peso / altura ** 2;
    res.innerHTML = `<h2>Seu IMC é ${IMC.toFixed(2)}</h2>`;
  }
}

calcularIMC(altura, peso);
