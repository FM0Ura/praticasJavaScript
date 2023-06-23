var numerosSelecionados = []; // Array para armazenar os números selecionados

function gerarNumerosAleatorios(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Gera um número aleatório dentro do intervalo especificado
}

function desenharTabela() {
  var nomeJogador = String(prompt(`Qual é o seu nome?`));
  if (nomeJogador.length == 0) {
    alert("[ERRO] Digite um nome para prosseguir!");
  } else {
    var cartelas = document.querySelector("#cartelas");
    var cartela = document.createElement("div.cartela");
    cartelas.appendChild(cartela);
    cartela.innerHTML += `<h3>${nomeJogador}</h3>`;
    var tabela = document.createElement("table");
    cartela.appendChild(tabela);

    var thead = document.createElement("thead");
    tabela.appendChild(thead);

    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");
    thead.appendChild(th1);
    thead.appendChild(th2);
    thead.appendChild(th3);
    thead.appendChild(th4);
    thead.appendChild(th5);
    th1.innerHTML = "B";
    th2.innerHTML = "I";
    th3.innerHTML = "N";
    th4.innerHTML = "G";
    th5.innerHTML = "O";

    for (var d = 1; d <= 5; d++) {
      var tbody = document.createElement("tbody");
      tabela.appendChild(tbody);
      for (var c = 1; c <= 5; c++) {
        var td = document.createElement("td");
        tbody.appendChild(td);

        var min, max;
        if (c === 1) {
          min = 1;
          max = 15;
        } else if (c === 2) {
          min = 16;
          max = 30;
        } else if (c === 3) {
          min = 31;
          max = 45;
        } else if (c === 4) {
          min = 46;
          max = 60;
        } else if (c === 5) {
          min = 61;
          max = 75;
        }

        td.innerText = gerarNumerosAleatorios(min, max);
      }
    }
  }
}

function sorteio() {
  var cartelas = document.querySelectorAll("table");
  var res = document.querySelector("#res");
  if (cartelas.length === 0) {
    console.error("Não há cartelas disponíveis!");
    return; // Encerra a função caso não haja tabelas
  }

  var numeroAleatorio;
  do {
    numeroAleatorio = Math.floor(Math.random() * 75) + 1; // Gera um número aleatório de 1 a 75
  } while (numerosSelecionados.includes(numeroAleatorio)); // Repete o sorteio se o número já tiver sido selecionado

  numerosSelecionados.push(numeroAleatorio); // Adiciona o número ao array de números selecionados
  atualizarNumerosSelecionados(); // Atualiza a exibição dos números sorteados no HTML
  marcarNumeroNaTabela(numeroAleatorio); // Marca o número sorteado na cartela

  // Verifica se alguma cartela tem todos os números selecionados
  var jogadoresGanhadores = [];
  for (var i = 0; i < cartelas.length; i++) {
    var celulas = cartelas[i].querySelectorAll("td");
    var todosSelecionados = true;
    for (var j = 0; j < celulas.length; j++) {
      if (!celulas[j].classList.contains("numero-sorteado")) {
        todosSelecionados = false;
        break;
      }
    }
    if (todosSelecionados) {
      var jogadorGanhador =
        cartelas[i].parentNode.querySelector("h3").textContent;
      jogadoresGanhadores.push(jogadorGanhador);
    }
  }

  if (jogadoresGanhadores.length > 0) {
    alert(
      "Os jogadores " + jogadoresGanhadores.join(", ") + " ganharam o bingo!"
    );
    var btnReiniciar = document.querySelector("#btnReiniciar");
    if (jogadoresGanhadores.length > 0) {
      btnReiniciar.style.display = "block"; // Exibe o botão "Reiniciar"
    } else {
      btnReiniciar.style.display = "none"; // Oculta o botão "Reiniciar"
    }

    return; // Encerra a função se houver jogadores ganhadores
  }

  setTimeout(sorteio, 1); // Chama recursivamente a função para sortear o próximo número após 1 segundo de atraso
}

function atualizarNumerosSelecionados() {
  var selected = document.querySelector("#numerosSelecionados");
  selected.innerHTML = "";

  for (var i = 0; i < numerosSelecionados.length; i++) {
    var numero = numerosSelecionados[i];
    var span = document.createElement("span");
    span.textContent = numero;
    selected.appendChild(span);
  }
}

function marcarNumeroNaTabela(numero) {
  var cartelas = document.querySelectorAll("table");
  for (var i = 0; i < cartelas.length; i++) {
    var celulas = cartelas[i].querySelectorAll("td");
    for (var j = 0; j < celulas.length; j++) {
      if (celulas[j].textContent == numero) {
        celulas[j].classList.add("numero-sorteado");
      }
    }
  }
}

function seletorNumeros() {
  sorteio();
  atualizarNumerosSelecionados();
}

function reiniciarJogo() {
  var cartelas = document.querySelectorAll("table");
  var cartelasContainer = document.querySelector("#cartelas");

  // Remove todas as cartelas
  cartelasContainer.innerHTML = "";

  // Limpa os números selecionados
  numerosSelecionados = [];
  atualizarNumerosSelecionados();
}
