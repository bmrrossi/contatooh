angular.module("contatooh", ['ngRoute', 'ngResource']).config(function($routeProvider){
  /**
  * É feita a injeção de dependência do módulo $routerProvider
  * responsável pelas rotas da aplicação
  */

  $routeProvider.when('/contatos', { // Quando acessada a URL contatos
    templateUrl: 'partials/contatos.html', // template utilizado
    controller: 'ContatosController' // Controller responsável
  });


  $routeProvider.when('/contato/:contatoId', {
    templateUrl: 'partials/contato.html',
    controller: 'ContatoController'
  });

  $routeProvider.when('/contato', {
    templateUrl: 'partials/contato.html',
    controller: 'ContatoController'
  });

  $routeProvider.otherwise({redirectTo: '/contatos'}); // Adiciona uma rota padrão
});
