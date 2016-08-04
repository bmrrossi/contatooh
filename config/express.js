var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
  var app = express(); // Inicializa a variável app com as configurações do express.

  app.set("port", "3000"); // Seta a porta onde a aplicação vai rodar.
  app.use(express.static('./public')); // express.static aponta para o caminho dos arquivos disponíveis.
  //middlewares
  app.set('view engine', 'ejs'); // Seta a engine do template para EJS (npm install ejs@0.8)
  app.set('views', './app/views'); // Diz que as views vão ficar em /app/views
  app.use(bodyParser.urlencoded({extended: true})); // Popula o req.body com os parametros do POST.
  app.use(bodyParser.json()); // Converte o body parser em formato json
  app.use(require('method-override')()); // Garante a chamada para verbos corretamente

  load('models', {cwd: 'app'})
   .then('controllers')
   .then('routes')
   .into(app); // Carrega os models, controllers e routes para dentro do express. Deve ser chamado nessa ordem pois
               // routes incluem controllers e controllers incluem models.
               // cwd: muda o diretório padrão de contatooh para app.
  return app;
}
