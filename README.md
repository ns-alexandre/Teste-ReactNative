# 📱 Teste - React Native
Desafio de desenvolvimento de um aplicativo em React Native que consome uma API pública de notícias espaciais e exibe uma lista de artigos com imagem, título e resumo, permitindo também o compartilhamento dos itens.

## Instruções para rodar o projeto

0.5. Pré-requisitos:
- Instalar o [Node.js](https://nodejs.org/pt-br/download/current.)
- Instalar o [Git](https://git-scm.com/install/windows)
- (Opcional: Instalar o App Expo GO no [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=web_share) ou [App Store](https://apps.apple.com/br/app/expo-go/id982107779))

1. Clonar o repositório:
```
git clone https://github.com/ns-alexandre/Teste-ReactNative.git
```

2. Entrar na pasta:
```
cd Teste-ReactNative
```

3. Instalar as dependências:
```
npm install
```

4. Iniciar o projeto:
```
npx expo start
```

5. Abrir no navegador (tecla W) ou no app Expo Go no celular.

## API utilizada
[Spaceflight News API](https://api.spaceflightnewsapi.net/v4/articles/)

## Funcionalidades implementadas
- Consumo de API pública
- Exibição de lista com imagem, título e resumo
- Indicador de carregamento (loading)
- Tratamento de erro de requisição
- Botão de compartilhamento de artigos usando a API nativa do React Native
