angular.module("contatooh").controller("ContatosController", function($scope, $resource, Contato) {

  $scope.total = 0;

  $scope.contatos = [];

  $scope.filtro = ''; // Faz o filter no ng-repeat

  $scope.mensagem = {texto: ''};

  $scope.remove = function(contato) {
    // Utilizamos uma promise porém por baixo. O delete recebe três parametros
                          // (contatoId, callback de sucesso, callback de erro)
    Contato.delete({id: contato._id}, buscaContatos, function(erro){
      console.log("Não foi possível remover o contato." + contato._id);
      $scope.mensagem = {texto: "Não foi possível remover o contato"};
      console.log(erro);
    });

  }

  function buscaContatos() {
    Contato.query(function(contatos) { // Realiza a promise de busca
      $scope.contatos = contatos;
      $scope.mensagem = {};
    },
    function(erro){
      console.log("Não foi possível obter a lista de contatos.");
      $scope.mensagem = {
        texto: "Não foi possível obter a lista de contatos"
      };
      console.log(erro);
    }
    );
  }

  buscaContatos();

});
