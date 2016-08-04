module.exports = function(app) {
  var controller = app.controllers.home;
  app.get('/index', controller.index);
  app.get('/', controller.index); // Equivale ao verbo get do http
}
