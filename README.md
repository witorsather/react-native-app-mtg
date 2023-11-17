# Magic: The Gathering React Native App

Um aplicativo React Native com React Navigation que interage com a API Magic: The Gathering para fornecer informações sobre cartas e conjuntos.

## Recursos

- **Navegação e busca de cartas e conjuntos:** Explore e pesquise facilmente cartas e conjuntos de Magic: The Gathering.
- **Detalhes das cartas e conjuntos:** Exiba informações detalhadas sobre cartas e conjuntos individuais.

## Tecnologias Utilizadas

- **React Native com Expo:** Desenvolvimento móvel multiplataforma com React e Expo.
- **React Navigation:** Gerenciamento de navegação.

## Referência da API

Este aplicativo utiliza a API Magic: The Gathering para obter informações de cartas e conjuntos. [Documentação oficial](https://docs.magicthegathering.io/).

## Imagens do Aplicativo

### Tela Inicial
![Home](utilidades/home.png)

### Detalhes da Carta
![Cards Details](utilidades/cards-details.png)

### Lista de Cartas
![Cards List](utilidades/cards-list.png)

## Como Instalar e Executar o Projeto

1. **Instale o Expo CLI globalmente:**
    ```bash
    npm install --global expo-cli --force
    ```

2. **Crie um novo projeto React Native com Expo:**
    ```bash
    expo init react-native-app-mtg
    ```

3. **Navegue até o diretório do projeto:**
    ```bash
    cd react-native-app-mtg
    ```

4. **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

5. **Inicie o aplicativo:**
    ```bash
    npm start
    ```

6. **Executar no Emulador ou Dispositivo:**
   - Use o app Expo Go no seu dispositivo ou emulador para escanear o código QR gerado no terminal.

7. **Adicione as dependências necessárias para navegação:**
    ```bash
    npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0
    npm install @react-navigation/native @react-navigation/stack
    ```

8. **Execute o aplicativo com as dependências adicionadas:**
    ```bash
    npm start
    ```

Lembre-se de ajustar as versões nas instruções conforme necessário, pois as versões podem ser atualizadas.

## Contribuição

Contribuições são bem-vindas! Siga estas etapas para contribuir:

1. Faça um fork do repositório.
2. Crie um novo branch para sua funcionalidade.
3. Faça suas alterações e faça commit.
4. Envie uma pull request detalhando suas alterações.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).


