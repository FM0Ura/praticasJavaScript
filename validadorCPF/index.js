// Código com interatividade com HTML.

function validCPF() {

}

// Código apenas para o Console.

function validarCPF(p, s, t, q, qui, sext, set, o, n, d1, d2) {
  var cpf = [p, s, t, q, qui, sext, set, o, n, d1, d2]; // Array para armazenar os números do CPF.

  var multiplicador = 10; // Variavel que será usada para multiplicar os números no loop.

  var soma1 = 0; // Váriavel onde será armazenada o valor da soma dos 9 primeiros números.

  var dez = 0; // Onde será armazenado o resultado dos calculos para o d1.

  var onze = 0; // Onde será armazenado o resultado dos calculos para o d2.

  /* Calculo para verificação de d1 */

  // Loop para pegar a soma dos números não verificadores.
  for (var c = 0; c < 9; c++) {
    soma1 += cpf[c] * multiplicador;
    multiplicador--;
  }
  console.log(
    `Esse é o resultado da soma dos números não verificadores multiplicados ${soma1}`
  );

  var restoD1 = soma1 % 11; // Variável que irá armazenar o resto da divisão de soma/11.

  // Condição para d1 = 0.
  if (restoD1 == 0 || restoD1 == 1) {
    dez = 0;
  } else {
    dez = 11 - restoD1;
  }
  console.log(`O primeiro número verificador é ${dez}`);

  /* Calculo para verificação de d2 */

  var soma2 = 0; // Váriavel onde será armazenada o valor da soma dos números começando do 2º até o 10º.
  multiplicador = 10;
  for (var c = 1; c < 10; c++) {
    soma2 += cpf[c] * multiplicador;
    multiplicador--;
  }
  var restoD2 = soma2 % 11; // Variável que irá armazenar o resto da divisão de soma/11.

  // Condição para d1 = 0.
  if (restoD2 == 0 || restoD2 == 1) {
    onze = 0;
  } else {
    onze = 11 - restoD2;
  }
  console.log(`O segundo número verificador é ${onze}`);

  if (d1 === dez && d2 === onze) {
    console.log(`Parabéns! Seu CPF ${cpf.join("")} é válido!`);
  } else {
    console.log(`Amigo... Seu CPF ${cpf.join("")} é inválido!`);
  }
}

// validarCPF(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9);
