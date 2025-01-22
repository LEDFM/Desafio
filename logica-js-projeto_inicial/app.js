alert('Bem vindos ao site');

let nome = prompt ('Qual o seu nome?');
let idade = Number (prompt('Qual a sua idade?'));
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = 'Erro! preencha todos os campos';
alert(mensagemDeErro);

if (idade >= 18) { 
alert ('Pode criar uma habilitação'); 
} else { 
    alert('Ainda não pode tirar a habilitação');
    
}