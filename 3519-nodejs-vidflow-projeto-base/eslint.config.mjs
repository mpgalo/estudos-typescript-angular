export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",  // Usa a versão mais recente do ECMAScript
      sourceType: "module",   // Define o tipo de módulo como ES6
      globals: {
        // Defina aqui todas as variáveis globais que você usa e que o ESLint precisa reconhecer
        fetch: "readonly",
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },
    rules: {
      // Suas regras personalizadas aqui
      "no-undef": "error", // Garante que variáveis não definidas sejam marcadas como erro
    },
  },
];
