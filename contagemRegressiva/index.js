/*Contagem regressiva: Escreva uma função que receba um número como parâmetro e faça uma contagem regressiva a partir desse número até 0. Imprima cada número no console.*/

// Função para HTML.

function contagemRegressiva() {
  var txtstart = document.querySelector("#txtstart");
  var start = Number(txtstart.value);
  var res = document.querySelector("#res");
  res.innerHTML = "";
  res.style.fontFamily = "PT Mono";
  if (txtstart.value.length == 0) {
    res.innerHTML = `<p><strong>[ERROR]</strong> Para prosseguir preencha o campo acima!</p>`;
  } else if (start == 0) {
    res.innerHTML = `<p>0 é um <strong>número inválido!</strong></p>`;
  } else {
    for (var c = start; c >= 0; c--) {
      if (c > 0) {
        res.innerHTML += `<p><strong>${c}</strong> \u{1F4AA}</p>  `;
      } else {
        res.innerHTML += `<p><strong>${c}</strong> \u{1F525}</p>  `;
      }
    }
  }
}

// Função para Console.

function contagemReg(n) {
  while (n > 0) {
    if (n > 0) {
      console.log(`${n} \u{1F4AA}`);
    } else {
      console.log(`${n} \u{1F525}`);
    }
    n--;
  }
}
