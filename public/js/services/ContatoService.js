angular.module('contatooh').factory('Contato', function($resource) {

  // Todo serviço criado com factory deve retornar um objeto
  return $resource('/contatos/:id');
});
