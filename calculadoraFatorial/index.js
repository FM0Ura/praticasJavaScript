// Funcional com HTML

function calcularFatorial() {
  var txtnumero = document.querySelector("#txtnumero");
  var numero = Number(txtnumero.value);
  var res = document.querySelector("#res");

  if (txtnumero.value.length == 0) {
    res.innerHTML = `<h2>Amigo, preencha o campo acima para calcular o fatorial!</h2>`;
  } else if (numero < 0) {
    res.innerHTML = `<h2>Amigo, o fatorial serve apenas para números positivos!</h2>`;
  } else {
    var fatorial = 1;
    for (var c = numero; c >= 1; c--) {
      fatorial *= c;
    }

    res.innerHTML = `<h2>O fatorial de ${numero} é ${fatorial}!</h2>`;
  }
}

// Funcional com Console, utilizando parâmetro!

/*function calcFatorial(n) {
  if (n == 0) {
    return console.log(1);
  } else if (n < 0) {
    console.log("Fatorial serve apenas para número positivos!");
  } else {
    var fatorial = 1;
    for (var i = n; i >= 1; i--) {
      fatorial *= i;
    }
  }
  console.log(fatorial);
}

calcFatorial(10);*/
