# Generic Corp

Este é um projeto desenvolvido com React e Vite, utilizando Tailwind CSS para estilos e ESLint para linting. A seguir, estão as informações necessárias para configurar e rodar o projeto.

## Ferramentas e Dependências

### Ferramentas Usadas

- **React**: Biblioteca para a construção de interfaces de usuário.
- **Vite**: Ferramenta de build e desenvolvimento rápida e moderna.
- **Tailwind CSS**: Framework utilitário para estilos.
- **ESLint**: Ferramenta para identificar e corrigir problemas em seu código JavaScript.

### Dependências

- `react`: Biblioteca principal para criar componentes de interface.
- `react-dom`: Fornece métodos específicos para DOM e servidor.
- `react-hook-form`: Para gerenciar formulários de maneira simples e eficiente.
- `tailwind-merge`: Utilitário para combinar classes do Tailwind CSS de forma inteligente.

### DevDependencies

- `@eslint/js`: Conjunto de regras de linting para JavaScript.
- `@types/react` e `@types/react-dom`: Tipagens para TypeScript.
- `@vitejs/plugin-react`: Plugin para suportar React no Vite.
- `autoprefixer`: Adiciona prefixos de navegador automaticamente para CSS.
- `eslint`: Ferramenta de linting.
- `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`: Plugins para linting específico do React.
- `postcss`: Ferramenta para transformar CSS com plugins.
- `tailwindcss`: Framework CSS para estilização.
- `vite`: Ferramenta de construção e desenvolvimento.

## Scripts

- **`npm run dev`**: Inicia o servidor de desenvolvimento com Vite.
- **`npm run build`**: Cria uma versão otimizada para produção do projeto.
- **`npm run lint`**: Executa ESLint para verificar problemas no código.
- **`npm run preview`**: Visualiza o resultado da construção em um servidor de pré-visualização.

## Como Rodar o Projeto

1. **Instalar as Dependências**

   Primeiro, você precisa instalar todas as dependências do projeto. No terminal, execute:

   ```bash
   $ npm install
   ```

2. **Rodar o Servidor de Desenvolvimento**

   Para iniciar o servidor de desenvolvimento e ver o projeto em execução, use:

   ```bash
   $ npm run dev
   ```

3. **Construir o Projeto para Produção**

   Para criar uma versão otimizada do projeto, execute:

   ```bash
   $ npm run build
   ```

4. **Visualizar a Construção**

    Para visualizar a versão construída do projeto, use:

    ```bash
    $ npm run preview
    ```

5. **Executar Linting**

    Para verificar problemas no código com ESLint, execute:

    ```bash
    $ npm run lint
    ```

## Decisões de Desenvolvimento

- Vite foi escolhido como ferramenta de construção e desenvolvimento devido à sua velocidade e simplicidade.

- Tailwind CSS foi utilizado para fornecer uma abordagem utilitária para estilização, permitindo um desenvolvimento mais ágil e consistente.

- React Hook Form foi integrado para facilitar a manipulação de formulários de maneira eficiente e com menos código.

- ESLint foi configurado para manter o código limpo e consistente, com plugins específicos para React para garantir boas práticas.