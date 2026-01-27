# 📱 Teste - React Native
Desafio de desenvolvimento de um aplicativo em React Native que consome uma API pública de notícias espaciais e exibe uma lista de artigos com imagem, título e resumo, permitindo também o compartilhamento dos itens.

## Instruções para rodar o projeto

1. Instalar o [Node.js](https://nodejs.org/pt-br/download/current.)

2. Clonar o repositório:
```
git clone https://github.com/ns-alexandre/Teste-ReactN.git
```

3. Entrar na pasta:
```
cd Teste-ReactN
```

4. Instale as dependências:
```
npm install
```

5. Iniciar o projeto:
```
npx expo start
```

6. Abrir no navegador (tecla W) ou no app Expo Go no celular.

## API utilizada
[Spaceflight News API](https://api.spaceflightnewsapi.net/v4/articles/)

## Funcionalidades implementadas
- Consumo de API pública
- Exibição de lista com imagem, título e resumo
- Indicador de carregamento (loading)
- Tratamento de erro de requisição
- Botão de compartilhamento de artigos usando a API nativa do React Native
