// Jogo da Forca: Crie um jogo da forca em que o programa escolha uma palavra aleatória e o jogador tenha que adivinhar a palavra letra por letra. O jogador tem um número limitado de tentativas antes de perder o jogo.

// Tema capitais do Brasil.

var input = document.querySelector("#letra");
var capitalAleatoria = undefined;
var letrasDigitadas = new Set();

// Restrições:

// Função para previnir que sejam digitados números no input.
function notNumber() {
  input.addEventListener("keypress", function (n) {
    let keyCode = n.keyCode ? n.keyCode : n.wich;

    if (keyCode > 47 && keyCode < 58) {
      n.preventDefault();
    }
  });
}

// Evento para que não seja possível digitar mais de uma letra no input.
input.addEventListener("input", (e) => {
  if ((input.value.length = 1)) {
    input.value = input.value.substring(0, 1);
  }
});

function removerAcentos(letra) {
  return letra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
// FIM - Restrições!

function pegarCapital() {
  if (capitalAleatoria == undefined) {
    const capitais = [
      "Brasília",
      "Rio de Janeiro",
      "São Paulo",
      "Belo Horizonte",
      "Salvador",
      "Fortaleza",
      "Recife",
      "Porto Alegre",
      "Manaus",
      "Curitiba",
      "Belém",
      "Goiânia",
      "João Pessoa",
      "Aracaju",
      "Natal",
      "Florianópolis",
      "Cuiabá",
      "Campo Grande",
      "Macapá",
      "Teresina",
      "Vitória",
      "São Luís",
      "Palmas",
      "Maceió",
      "Boa Vista",
      "Rio Branco",
      "Porto Velho",
    ];
    var numAleat = Math.floor(Math.random() * capitais.length);
    capitalAleatoria = capitais[numAleat];
    console.log(capitalAleatoria);
  }
}

function forca(letra) {
  var letra = input.value;

  let lixeira = document.querySelector("#lixeira");
  let usadas = document.querySelector("#letras_usadas");
  let acertos = document.querySelector("#acertos");
  let boneco = document.querySelector("#boneco");
  if (letra.length == 0) {
    alert("[ERROR] Digite uma letra válida ");
  } else if (letrasDigitadas.has(letra.toLowerCase())) {
    alert("Você já digitou essa letra");
  } else {
    pegarCapital();
    console.log(letra);
    if (
      capitalAleatoria.includes(letra.toLowerCase(), 0) ||
      capitalAleatoria.includes(letra.toUpperCase(), 0)
    ) {
      acertos.innerHTML += letra.toUpperCase();
      usadas.innerHTML += letra.toUpperCase();
    } else {
      lixeira.innerHTML += letra.toUpperCase();
      usadas.innerHTML += letra.toUpperCase();
    }
    // Adicionar a letra ao conjunto de letras digitadas
    letrasDigitadas.add(letra.toLowerCase());
  }
  console.log(letrasDigitadas);
}

// Problemas:
// Adicionar bonequinho.
// Colocar cor nas letras.
// Verificar quando a palavra já foi completamente digitada.
// Restringir tentativas, e fazer o "GAME OVER"
