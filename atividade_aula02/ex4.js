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

let nomeFuncionario = document.getElementById('nome');
let salarioFuncionario = document.getElementById('salario');
let cargoFuncionario = document.getElementById('cargo');

let cargos = ['estagiario', 'desenvolvedor', 'analista', 'administrador', 'gerente']
const funcionarios = [];

const response = document.getElementById('response')

const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = nomeFuncionario.value
  let salario = salarioFuncionario.value
  let cargo = cargoFuncionario.value

  let flatCargoValido = false;

  response.innerHTML = ''
  let mensagemErro = document.createElement('h3')
  mensagemErro.style.color = 'red'
  
  if(nome == '' || nome == null)
  {
    mensagemErro.innerHTML = 'O nome para cadastrar está inválido!'
    response.appendChild(mensagemErro)
  }

  if(salario <= 0)
  {
    mensagemErro.innerHTML = 'O salário deve ser um valor positivo!'
    response.appendChild(mensagemErro)
  }

  cargos.forEach(cargoValido => {
    if(cargo == cargoValido)
    {
      flatCargoValido = true
    }
  });

  if(!flatCargoValido)
  {
    mensagemErro.innerHTML = 'O cargo não está correto!'
    response.appendChild(mensagemErro)
  }

  let funcionario = {
    nome: nome,
    salario: salario,
    cargo: cargo
  }

  console.log(funcionario)

  let mensagemSucesso = document.createElement('h3')
  mensagemSucesso.style.color = 'green'
  mensagemSucesso.innerHTML = 'Funcionário cadastrado com sucesso!'
  response.appendChild(mensagemSucesso)

  funcionarios.push(funcionario);
})

