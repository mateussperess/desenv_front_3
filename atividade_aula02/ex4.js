// Exercício 4
// Crie um formulário html que será utilizado para cadastrar empregados de uma empresa.
// Este formulário será composto por um campo input nome, um campo input salario e um
// campo select cargo, o qual possui os valores estagiário, desenvolvedor, analista,
// administrador e gerente, além de um botão cadastrar.
// Faça com que o clique no botão cadastrar verifique os campos acima citados, validando
// os mesmos de forma a garantir que o nome não seja vazio, o salário positivo e o cargo,
// um dos valores selecionados.
// A partir desses campos, caso todos tenham sido preenchidos corretamente, crie um
// objeto que armazena estes atributos do funcionário, armazenando o mesmo em um
// array de funcionários.

let nomeFuncionario = document.getElementById("nome");
let salarioFuncionario = document.getElementById("salario");
let cargoFuncionario = document.getElementById("cargo");

let cargos = [
  "estagiario",
  "desenvolvedor",
  "analista",
  "administrador",
  "gerente",
];
const funcionarios = [];

const response = document.getElementById("response");
const table = document.getElementById("table")

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = nomeFuncionario.value;
  let salario = salarioFuncionario.value;
  let cargo = cargoFuncionario.value;

  let dadosOK = false;
  let erros = [];
  let flagCargoValido = false;

  response.innerHTML = "";
  let mensagemErro = document.createElement("h3");
  mensagemErro.style.color = "red";

  if (nome === "" || nome === null) {
    erros.push("nome");
  }

  if (salario === "" || salario === null || salario <= 0) {
    erros.push("salario");
  }

  cargos.forEach((cargoValido) => {
    if (cargo == cargoValido) {
      flagCargoValido = true;
    }
  });

  if (!flagCargoValido) {
    erros.push("cargo");
  }

  if (erros.length <= 0) {
    dadosOK = true;
  }

  let erroH3 = document.createElement("h3");
  erroH3.style.color = "red";
  erros.forEach((erro) => {
    erroH3.innerHTML = `Não foi possível cadastrar o funcionario pois o campo ${erro} não está de acordo com os critérios de cadastro`;
  });

  response.appendChild(erroH3);

  if (dadosOK) {
    let funcionario = {
      nome: nome,
      salario: salario,
      cargo: cargo,
    };

    let mensagemSucesso = document.createElement("h3");
    mensagemSucesso.style.color = "green";
    mensagemSucesso.innerHTML = "Funcionário cadastrado com sucesso!";
    response.appendChild(mensagemSucesso);

    popularListaFuncionarios(funcionario);

    funcionarios.push(funcionario);
  }
});

function popularListaFuncionarios(funcionario)
{
  let tr = document.createElement("tr")
  let tdNome = document.createElement("td");
  let tdSalario = document.createElement("td");
  let tdCargo = document.createElement("td");

  tdNome.textContent = funcionario.nome
  tdSalario.textContent = funcionario.salario
  tdCargo.textContent = funcionario.cargo

  tr.appendChild(tdNome)
  tr.appendChild(tdSalario)
  tr.appendChild(tdCargo)

  table.appendChild(tr)
}
