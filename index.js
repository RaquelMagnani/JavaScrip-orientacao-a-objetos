import{Cliente} from"./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 36848261899;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 36848261880;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;
ContaCorrenteRicardo.cliente = cliente1;
ContaCorrenteRicardo.depositar(500);

const ContaCorrenteAlice = new ContaCorrente();
ContaCorrenteAlice.agencia = 1001;
ContaCorrenteAlice.cliente = cliente2;

ContaCorrenteRicardo.transferir(200,ContaCorrenteAlice);

console.log(ContaCorrenteAlice);
