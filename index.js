// Código com interatividade com HTML.

function validCPF() {
  var stringCPF = document.querySelector("#cpf");
  var cpf = stringCPF.value;
  var res = document.querySelector("#res");
  if (stringCPF.value.length < 11) {
    res.innerHTML = `Um CPF deve conter 11 dígitos!`;
  } else {
    var multiplicador = 10;
    var soma1 = 0;
    /* Calculo do 1º dígito */
    // Loop para calcular o valor da soma.
    for (i = 0; i < 9; i++) {
      soma1 += cpf[i] * multiplicador;
      multiplicador--;
    }
    var resto1 = soma1 % 11;
    var verif1 = 0;

    // Condição para o número verificador.
    if (resto1 == 0 || resto1 == 1) {
      verif1 = 0;
    } else {
      verif1 = 11 - resto1;
    }

    /* Calculo do 2º dígito */
    var soma2 = 0;
    multiplicador = 10; // Re-definindo o multiplicador.

    // Loop para calcular o valor da soma.
    for (i = 1; i < 10; i++) {
      soma2 += cpf[i] * multiplicador;
      multiplicador--;
    }

    // Condição para o número verificador.
    var resto2 = soma2 % 11;
    var verif2 = 0;
    if (resto2 == 0 || resto2 == 1) {
      verif2 = 0;
    } else {
      verif2 = 11 - resto2;
    }

    // Retorno para #res.
    res.innerHTML = `<p>A soma para o 1º número deu <strong>${soma1}</strong> e o resto da primeira divisão deu <strong>${resto1}</strong>, logo o 1º dígito verificador é <strong>${verif1}</strong>.</p> 
    <p>A soma para o 2º número deu <strong>${soma2}</strong> e o resto da primeira divisão deu <strong>${resto2}</strong>, logo o 2º dígito verificador é <strong>${verif2}</strong>.</p>`;
    if (verif1 == cpf[9] && verif2 == cpf[10]) {
      res.innerHTML += `<p>Parabéns! Seu CPF é <strong>válido!</strong></p>`;
    } else {
      res.innerHTML += `<p>Infelizmente! Seu CPF é <strong>inválido!</strong></p>`;
    }
  }
}
// https://www.devmedia.com.br/validar-cpf-com-javascript/23916
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
