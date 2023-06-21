function criarTabela() {
  var tabela = document.getElementById("tabela");

  if (tabela == null) {
    var res = document.querySelector("#res");
    tabela = document.createElement("table");
    tabela.id = "tabela"; // Definindo o ID da tabela
    res.appendChild(tabela);
    var thead = document.createElement("thead");
    tabela.appendChild(thead);
    var tbody = document.createElement("tbody");
    tabela.appendChild(tbody);

    var titulos = [
      "Matrícula",
      "Nome",
      "Faltas",
      "Nota B1",
      "Nota B2",
      "Média Parcial",
      "Nota PR",
      "Média Final",
      "Situação",
    ];
    var tr = document.createElement("tr");

    for (var i = 0; i < titulos.length; i++) {
      var th = document.createElement("th");
      th.innerText = titulos[i];
      tr.appendChild(th);
    }

    thead.appendChild(tr);
  }

  return tabela;
}

function dadosAlunos() {
  var aluno = {};
  aluno.matricula = prompt("Qual a mátricula do aluno?");
  aluno.nome = prompt("Qual o nome do aluno(a)?");
  if (validarEntrada(aluno.nome)) {
    aluno.faltas = parseInt(
      prompt(`Quantas faltas ${aluno.nome} teve nesse semestre?`)
    );
    var total_aulas = 80;
    var percentualFaltas = aluno.faltas / total_aulas;

    if (percentualFaltas > 0.25) {
      aluno.situacao = "Reprovado por Faltas";
      aluno.notab1 = " - ";
      aluno.notab2 = " - ";
      aluno.mediaParcial = " - ";
      aluno.mediaFinal = " - ";
      aluno.provafinal = " - ";
    } else if (percentualFaltas > 1) {
      alert("[ERROR] Quantidade de faltas inválidas!");
    } else {
      if (
        aluno.notab1 > 10 ||
        aluno.notab1 < 0 ||
        aluno.notab2 > 10 ||
        aluno.notab2 < 0
      ) {
        alert(`[ERROR] Essa nota é inválida!`);
      } else {
        aluno.notab1 = parseFloat(
          prompt(`Qual foi a nota do 1º Bimestre de ${aluno.nome}?`)
        );
        aluno.notab2 = parseFloat(
          prompt(`Qual foi a nota do 2º Bimestre de ${aluno.nome}?`)
        );
        aluno.mediaParcial = (aluno.notab1 * aluno.notab2) / 2;
        alert(
          `A média parcial de ${aluno.nome} foi ${
            (aluno.notab1 * aluno.notab2) / 2
          }`
        );
        if (aluno.mediaParcial < 7) {
          aluno.provafinal = parseFloat(
            prompt(`Qual foi a nota da Prova Final de ${aluno.nome}?`)
          );
          aluno.mediaFinal = (aluno.provafinal * aluno.mediaParcial) / 2;
          if (aluno.mediaFinal >= 5) {
            aluno.situacao = "Aprovado";
          } else {
            aluno.situacao = "Reprovado por Nota";
          }
        } else if (aluno.mediaParcial < 3) {
          aluno.situacao = "Reprovado por Notas";
        } else {
          aluno.situacao = "Aprovado";
          aluno.provafinal = " - ";
          aluno.mediaFinal = aluno.mediaParcial;
        }
      }
    }

    inserirAlunoNaTabela(aluno);
  } else {
    alert(`[ERROR] Digite um nome válido!`);
  }
}

function inserirAlunoNaTabela(aluno) {
  var tabela = criarTabela();
  var linha = tabela.insertRow(-1);

  var ordemPropriedades = [
    "matricula",
    "nome",
    "faltas",
    "notab1",
    "notab2",
    "mediaParcial",
    "provafinal",
    "mediaFinal",
    "situacao",
  ];

  for (var i = 0; i < ordemPropriedades.length; i++) {
    var prop = ordemPropriedades[i];
    linha.insertCell(i).innerText = aluno[prop];
  }
}

// Função para verificar se há apenas textos na entrada de dados!

function validarEntrada(texto) {
  var padrao = /^[a-zA-Z\s]+$/; // Expressão regular para letras e espaços

  if (padrao.test(texto)) {
    // A entrada contém apenas letras e espaços
    return true;
  } else {
    // A entrada contém caracteres inválidos
    return false;
  }
}
