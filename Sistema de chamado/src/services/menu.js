import * as chamadoUSER from "./usuario/chamadousuario.js";
import rl from "./rl.js";
import loginAdmin from "./admin/verificacaoADMIN.js"

function menuPrincipal(listaDeChamados) {

    rl.question(
        chamadoUSER.chalk.yellow(
            "Opção de Login (1) USUARIO e (2) ADMIN: "
        ),
        (opcao) => {

            if (opcao != "1" && opcao != "2") {
                console.log(
                    chamadoUSER.chalk.red("OPÇÃO INVALIDA")
                );

                return menuPrincipal(listaDeChamados);
            }

            if (opcao === "1") {
                 console.log(
                    chamadoUSER.chalk.green("AREA DO USUARIO")  
                );

                chamadoUSER.loginUser(
                    listaDeChamados,
                    menuPrincipal
                );
            }

            if (opcao === "2") {
                console.log(
                    chamadoUSER.chalk.green("AREA ADMIN")  
                );

                 loginAdmin(listaDeChamados,rl,menuPrincipal)

            }

        }
    );
}

export default menuPrincipal;