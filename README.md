# To-Do List
Projeto FullStack com banco de dados não-relacional(noSQL) MongoDB! Toda a parte de renderização front-end é feita pela view-engine EJS! Trata-se de um CRUD (Create, Read, Update, Delete) onde temos listas de tarefas com tarefas dentro!

<p align="center">
<img src="https://github.com/Arthur-Candeia/todolist-mongoDB/blob/master/public/imgToReadme.png" >
</p>

## O que está presente na aplicação?
 - _Organização 🗂️:_ O usuário pode organizar suas tarefas por lista de tarefas!
 - _Velocidade ⚡:_ A velocidade dos bancos de dados não-relacionais é bem alta, dessa forma todas as atualizações são feitas com rapidez e eficácia!
 - _CRUD 👤:_ O usuário consegue realizar atividades fundamentais com a aplicação!

## Resumo dos arquivos
### **ROUTES**

#### checklist.js
Nessa arquivo de rotas temos todas as ações que podem ser feitas nas checklists, as principais rotas da aplicação estão nesse arquivo!
Rota `GET /checklists` Renderiza todas as checklists
Rota `GET /checklists/new` Renderiza a página para criar uma nova checklist
Rota `GET /checklists/:id` Renderiza a página de uma checklist em específico
Rota `GET /checklists/:id/edit` Renderiza a página para editar uma checklist
Rota `POST /checklists` Cria uma nova checklist
Rota `PUT /checklists/:id` Edita uma checklist com base em seu id
Rota `DELETE /checklists/:id` Deleta uma checklist com base em seu id

#### task.js
Nesse arquivo de rotas temos todas as ações que podem ser feitas nas tasks (tarefas), onde temos as Router's que dependem da checklist e as que não dependem (exclusão e modificação).
Rota `GET /checklists/:id/tasks/new` Remderiza a página de criação de uma nova tarefa em uma checklist
Rota `POST /checklists/:id/tasks` Salva uma tarefa em uma checklist específica
Rota `DELETE /tasks/:id` Exclui uma tarefa de uma checklist com base em seu id
Rota `PUT /tasks/:id` Edita uma tarefa de uma checklist com base em seu id

#### index.js
Nesse arquivo temos uma única rota que corresponde a raiz. Essa rota é responsável por renderizar o index!
Rota `GET /` Renderiza o start do projeto!


### **VIEWS**
Nesse conjunto de pastas temos toda a parte front-end do projeto! As rotas renderizam as páginas que estão dentro dessa pasta, onde a maioria dos arquivos estão dentro da sub-pasta checklists!


## Porque criei essa aplicação?
Esse projeto com múltiplas funcionalidades permite ao usuário uma organização rápida e completa! Com ele pude aprimorar meus conceitos e habilidades na manipulação de banco de dados não-relacionais!

📄 Infelizmente esse projeto não está hospedado 😕! Para utilizá-lo em sua máquina faça o clone do repositório, instale as dependências, configure seu MongoDB e inicie servidor utilizando `npx nodemon` ou `node(ou subtitua pelo seu gerenciador de pacotes) src/app.js`! O servidor será iniciado na porta 3000!