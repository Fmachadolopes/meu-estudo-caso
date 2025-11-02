# Estudo de Caso: Rotas em Aplicações Web e Mobile

[cite_start]Este projeto é um estudo de caso prático focado na implementação de rotas de navegação, dividido em duas partes: uma aplicação Web e uma aplicação Mobile[cite: 3].

* [cite_start]**Web:** Desenvolvido com React e Vite, utilizando `react-router-dom` para navegação[cite: 4, 9].
* [cite_start]**Mobile:** Desenvolvido com React Native e Expo, utilizando `react-navigation`[cite: 5, 9].

[cite_start]O objetivo é simular a navegação básica de listagem e detalhes de produtos[cite: 6].

---

## 🚀 Estrutura do Projeto

O repositório está organizado da seguinte forma:

/meu-estudo-caso
├── web/     → Projeto React com Vite
├── mobile/  → Projeto Expo com React Native
└── README.md  (Este arquivo)

---

## Web: Aplicação React + Vite

### [cite_start]Rotas Implementadas [cite: 45]

* [cite_start]`/` : Página inicial que exibe a lista de produtos com links para os detalhes[cite: 26].
* [cite_start]`/product/:id` : Página que exibe os detalhes de um produto específico[cite: 27].

### [cite_start]🛠️ Como Rodar (Web) [cite: 44]

1.  Acesse a pasta do projeto web:
    ```bash
    cd web
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute o projeto:
    ```bash
    npm run dev
    ```
4.  Abra `http://localhost:5173` (ou o endereço indicado no terminal) no seu navegador.

---

## 📱 Mobile: Aplicação React Native + Expo

### [cite_start]Rotas Implementadas [cite: 45]

* [cite_start]`Home` : Tela inicial com botões para navegar até os produtos[cite: 39].
* [cite_start]`Details` : Tela que exibe os detalhes do produto selecionado[cite: 40].

### [cite_start]🛠️ Como Rodar (Mobile) [cite: 44]

1.  Acesse a pasta do projeto mobile:
    ```bash
    cd mobile
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute o projeto:
    ```bash
    npx expo start
    ```
4.  Escaneie o QR Code exibido no terminal usando o aplicativo **Expo Go** no seu celular (Android ou iOS).