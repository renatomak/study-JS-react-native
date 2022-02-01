import { Cliente } from './Cliente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { Gerente } from './Funcionario/Gerente.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

// import { ContaCorrente } from './Conta/ContaCorrente.js';
// import { ContaPoupanca } from './Conta/ContaPoupaca.js';

// const cliente1 = new Cliente('Ricardo', 11122233309);

// const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.sacar(100);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// contaPoupanca.sacar(10);

// console.log(contaPoupanca);
// console.log(contaCorrenteRicardo);

const cliente = new Cliente('Laiz', 11122233309, "123456");
const diretor = new Diretor("Renato", 10000, 12345678900);
const gerente = new Gerente('Marques', 88899977744);
gerente.cadastrarSenha('123456')
diretor.cadastrarSenha("123456789")

const estaLogadoDiretor = SistemaAutenticacao.login(diretor, "123456789");
const estaLogadoGerente = SistemaAutenticacao.login(cliente, "123456");
const estaLogadoCliente = SistemaAutenticacao.login(cliente, "123");
console.log(estaLogadoDiretor, estaLogadoGerente, estaLogadoCliente);