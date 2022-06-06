import DepartamentoService from "../services/DepartamentoService";

class DepartamentoController {  

    static getDelete(req, res) {                           
        DepartamentoService.delete(req.params.id)
            .then((departamento) => {                                    
                DepartamentoService.getData(1,15,'id','DESC')
                  .then((departamentos) => {                
                      res.status(200).send({message:"departamento eliminada", result: departamentos });                                               
                })          
            })                   
            .catch((reason) => {              
          
              res.status(400).send({ message: reason });
            });         
      }

    static search(req, res) {  
        const { prop, value } = req.body                         
        DepartamentoService.search(prop, value)
        .then((data)=>{         
          res.status(200).send({message:"compras lista", result: data });
        })                   
            .catch((reason) => {              
            
              res.status(400).send({ message: reason });
            });         
      }
    
      static actualizar(req, res) {                           
        DepartamentoService.setUpdate(req.body,req.params.id)
            .then((xdepartamento) => {                
                DepartamentoService.getData(1,15,'nombre','asc')
                .then((data)=>{                 
                  res.status(200).send({message:"compras lista", result: data  }); 
                })            
            })                   
            .catch((reason) => {              
            
              res.status(400).send({ message: reason });
            });         
      }

    static getItem(req, res) {                           
        DepartamentoService.getItem(req.params.id)
            .then((departamento) => {                
                res.status(200).send({message:"departamento item", result: departamento });                                               
            })                   
            .catch((reason) => {              
             
              res.status(400).send({ message: reason });
            });         
      }
      static getData(req, res) {                           
        DepartamentoService.getData(req.params.pagina,req.params.num,req.params.prop,req.params.orden)
          .then((data)=>{               
            res.status(200).send({message:"compras lista", result: data }); 
          })                   
            .catch((reason) => {  
              console.log(reason  )            
              res.status(400).send({ message: reason });
            });         
      }



    static getItems(req, res) {                   
        DepartamentoService.getItems()
            .then((departamentos) => {                
                res.status(200).send({message:"departamentos lista", result: departamentos });                                               
            })                   
            .catch((reason) => {              
              res.status(400).send({ message: reason });
            });         
    } 
    


    static crear(req, res) {           
        DepartamentoService.setAdd(req.body)
            .then((departamento)=>{
              DepartamentoService.getData(1,15,'nombre','asc')
              .then((data)=>{                
                res.status(200).send({message:"departamentos lista", result: data });
              })                                  
            })                   
            .catch((reason) => {              
              res.status(400).send({ message: reason });
            });         
    } 




    static getList(req, res) {                                     
        DepartamentoService.getItems()
            .then((departamentos) => {                
                res.status(200).send({message:"departamentos lista", result: departamentos });                                               
            })                   
            .catch((reason) => {              
              res.status(400).send({ message: reason });
            });         
    }  
    
    
}

export default DepartamentoController;
