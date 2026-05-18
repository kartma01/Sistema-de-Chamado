# Sistema de Chamados

Sistema simples de chamados desenvolvido em Node.js para praticar lógica de programação, módulos, fluxo de menu, login de usuário/admin e manipulação de dados em memória.

## 🚀 Funcionalidades

- Login de usuário
- Login de administrador
- Criação de chamados
- Listagem de chamados pelo administrador
- Menu interativo no terminal
- Separação de arquivos por responsabilidade
- Uso de variáveis de ambiente com `.env`

## 🛠️ Tecnologias usadas

- Node.js
- JavaScript
- Readline
- Chalk
- Dotenv / `--env-file`

## 📁 Estrutura do projeto

```text
src/
├── index.js
├── services/
│   ├── rl.js
│   ├── menu.js
│   ├── chamados.js
│   ├── promptChamado.js
│   ├── admin/
│   └── usuario/
▶️ Como executar

Clone o repositório:

git clone https://github.com/kartma01/sistema-de-chamado.git

Entre na pasta:

cd sistema-de-chamado

Instale as dependências:

npm install

Crie um arquivo .env com:

LOGIN_USER=user
SENHA_USER=123
LOGIN_ADMIN=admin
SENHA_ADMIN=admin

Execute o projeto:

npm run comeca
🎯 Objetivo do projeto

Este projeto foi criado para praticar os fundamentos de Node.js, incluindo:

import/export
organização em módulos
readline no terminal
fluxo assíncrono
menus
login simples
manipulação de arrays
separação entre usuário e administrador
👨‍💻 Autor

Desenvolvido por kartma01 como parte dos estudos em Node.js.
