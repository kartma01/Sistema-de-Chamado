import especionaLoginADMIN from "./promptADMIN.js";
import { listarChamado  } from "../chamados.js";
import chalk from "chalk";
import menuPrincipal from "../menu.js";

function loginAdmin(listaDeChamados,rl,voltar) {
    rl.question(chalk.yellow.italic("LOGIN DO ADMIN: "), (login) => {

        rl.question(chalk.yellow.italic("SENHA DO ADMIN: "), (senha) => {
            let loginValido = especionaLoginADMIN(login, senha);

            if (loginValido === true) {
                listarChamado(listaDeChamados,voltar);
            } else {
                console.log(chalk.red("LOGIN OU SENHA ERRADO"))
                menuPrincipal(listaDeChamados);
            }
        });
    });
}

export default loginAdmin