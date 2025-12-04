Prova 1 – CRUD de Itens (HTML, CSS e JavaScript)

Este projeto consiste em uma interface simples para gerenciamento de itens (CRUD) utilizando HTML, CSS e JavaScript puro, conforme solicitado na Prova 1 da disciplina de Desenvolvimento Web.

A aplicação consome uma API fornecida pelo professor, que deve estar rodando em http://localhost:3000.

📁 Estrutura do Projeto

O repositório contém apenas os arquivos solicitados na prova:

index.html
script.js
styles.css


Não há dependências, node_modules ou frameworks utilizados — todo o funcionamento é baseado em JavaScript puro.

🚀 Funcionalidades

A interface permite realizar todas as operações do CRUD:

Criar um novo item

Listar os itens cadastrados

Editar um item existente

Excluir um item

Cancelar uma edição em andamento

A comunicação com a API é feita via fetch() utilizando os seguintes endpoints:

GET /items

POST /items

PUT /items/:id

DELETE /items/:id

🧩 Como Rodar o Projeto
1️⃣ Requisitos

A API fornecida pelo professor deve estar rodando localmente na porta 3000
Exemplo:

http://localhost:3000/items

2️⃣ Execução

Baixe ou clone este repositório:

git clone https://github.com/SEU_USUARIO/NOME_DO_REPO.git


Entre na pasta do projeto:

cd NOME_DO_REPO


Abra o arquivo index.html diretamente no navegador
(não é necessário servidor local):

Clique duas vezes no arquivo
ou

Use a extensão Live Server do VS Code, se preferir

Certifique-se de que a API está ativa.
Se estiver tudo correto, os itens serão carregados automaticamente.

🖥️ Tecnologias Utilizadas

HTML5

CSS3

JavaScript (ES6+)

API REST fornecida pelo professor

Nenhum framework ou biblioteca externa foi utilizada.

🔎 Observações Importantes

O projeto foi desenvolvido para fins avaliativos conforme instruções da prova.

A interface funciona apenas quando a API está ativa localmente.

O layout foi estilizado para ficar próximo ao exemplo demonstrado pelo professor.

👨‍💻 Autor

Thiago Moura