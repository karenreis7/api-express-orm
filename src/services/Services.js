
const dataSources = require('../models'); 

class Services {
  constructor(nomeDoModel){
    this.model = nomeDoModel; 
  }

  async getAllRegistry() {
    return dataSources[this.model].findAll(); 
  }

  // async updatedRegistry(dadosAtualizados, id){
  //   const listaDeRegistrosAtualizados = dataSources[this.model].update(dadosAtualizados, {
  //     where: { id: id } // 1ª id se refere ao campo da tabela e o 2º é o que vem do parametro
  //   }); 

  //   if (listaDeRegistrosAtualizados [0] === 0){
  //     return false; 
  //   }

  //   return true; 
  // }
}

module.exports = Services; 