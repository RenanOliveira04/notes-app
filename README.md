# Projeto Todo App

Este é um aplicativo simples de lista de tarefas (Todo App) desenvolvido em React com um backend em Node.js usando Express. Ele permite que os usuários adicionem, completem e excluam tarefas, além de visualizar um resumo das tarefas.

## Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Excluir tarefas individuais
- Excluir todas as tarefas concluídas
- Visualizar um resumo das tarefas

## Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

## Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**

   Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:

   ```bash
   npm install
   ```

3. **Execute o servidor Express:**

   Navegue até o diretório `api` e inicie o servidor:

   ```bash
   cd api
   node index.js
   ```

   O servidor estará disponível em `http://localhost:3000`.

4. **Execute o aplicativo React:**

   Volte para o diretório raiz do projeto e inicie o servidor de desenvolvimento do React:

   ```bash
   cd ..
   npm start
   ```

   O aplicativo estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- **src/components**: Contém os componentes React utilizados no aplicativo.
- **src/hooks**: Contém hooks personalizados para gerenciar o estado das tarefas.
- **api**: Contém o código do servidor Express.
- **public**: Contém arquivos estáticos, como imagens e o arquivo `index.html`.

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
