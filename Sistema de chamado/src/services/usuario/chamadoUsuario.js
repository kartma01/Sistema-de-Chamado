import rl from "../rl.js";
import configuraçãoChamado from "../promptChamado.js"; 
import * as chamado from "../chamados.js";
import especionaLoginUser from "./promptUSER.js";
import chalk from "chalk";

let proximoId = 1;

function loginUser(listaDeChamados, voltar) {
    rl.question(chalk.yellow.italic("LOGIN DO USUARIO: "), (login) => {

        rl.question(chalk.yellow.italic("SENHA DO USUARIO: "), (senha) => {
            let loginValido = especionaLoginUser(login, senha);

            if (loginValido === true) {
                adicaoProduto(listaDeChamados, voltar);
            } else {
               console.log(chalk.red("LOGIN OU SENHA ERRADA"))
                voltar(listaDeChamados);
            }
        });
    });
}

function adicaoProduto(listaDeChamados, voltar) {

    rl.question("Titulo: ", (titulo) => {

        rl.question("Descrição: ", (descricao) => {

            const adicionar = configuraçãoChamado(
                proximoId++,
                titulo,
                descricao
            );

            chamado.adicionarChamado(listaDeChamados, adicionar);

            console.log(listaDeChamados);

            voltar(listaDeChamados);
        });

    });
}

export { adicaoProduto, loginUser, chalk };