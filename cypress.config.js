const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.nuuvem.com/br-pt', //DEFINA A URL BASE QUE A APLICAÇÃO DE TESTES VAI ACESSAR
    experimentalRunAllSpecs: true,
    defaultCommandTimeout: 4000,
  },
  fixturesFolder: false,
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
})
