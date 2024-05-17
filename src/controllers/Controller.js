
class Controller {
  constructor(entityService){
    this.entityService = entityService;
  }

  async getAll(req, res){
    try {
      const listaDeRegistros = await this.entityService.getAllRegistry();
      return res.status(200).json(listaDeRegistros); 
    } catch (error) {
      // error
    }
  }


  async atualiza(req, res){
    const { id } = req.params; 
    const dadosAtualizados = req.body; 

    try {
      const isUpdated = await this.entityService.atualizadaRegistro(dadosAtualizados, Number(id));
      if (!isUpdated){
        return res.status(400).json({ message: 'registro não foi atualizado!'}); 
      } 
      return res.status(200).json({ message: 'registro atualizado com sucesso!'});
    } catch (error) {
      //error
    }
  }
}


module.exports = Controller; 