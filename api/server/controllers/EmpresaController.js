import EmpresaService from "../services/EmpresaService";
import DepartamentoService from "../services/DepartamentoService";
import CargoService from "../services/CargoService";
import ContratoService from "../services/ContratoService";

class EmpresaController {

  static actualizar(req, res) {                           
    EmpresaService.setUpdate(req.body,req.params.id)
        .then((xcliente) => {                
          EmpresaService.getItem(req.params.id)
            .then((cliente)=>{
              res.status(200).send({message:"empresa actualizado", result: cliente });
            })            
        })                   
        .catch((reason) => {              
        
          res.status(400).send({ message: reason });
        });         
  }

  static getItem(req, res) {                           
    EmpresaService.getItem(req.params.id)
        .then((empresa) => {                
            res.status(200).send({message:"empresa item", result: empresa });                                               
        })                   
        .catch((reason) => {              
        
          res.status(400).send({ message: reason });
        });         
  }

  static getList(req, res) {                               
    Promise.all([
      DepartamentoService.getEstructura(),
      CargoService.getCargos(),
      ContratoService.verificarLista()
    ])
    .then(([departamentos,cargos,contratos]) => {          
      let lCargos = parse(cargos,contratos) 
      let lResult = parsear(departamentos,lCargos)                     
      res.status(200).send({message:"empresa item", result: lResult });      
    })                   
    .catch((reason) => {   
      console.log(reason)  
      res.status(400).send({ message: reason });
    });         
  }   
  
}

function parse(cargos,contratos){  
  let newArray = []
  cargos.map(it=>{    
    let iok = {}
      iok.id             = it.id
      iok.nombre         = it.nombre
      iok.departamentoId = it.departamentoId                  
    contratos.map(itt=>{                  
        if(it.id === parseInt(itt.cargoId))
        {
         iok.estado     = true
         iok.personaId  = itt.personaId 
         iok.contratoId = itt.id
        }else { 
          iok.estado     = false  
          iok.personaId  = null
          iok.contratoId = null
        }    
    })
    newArray.push(iok)  
  })
  
  return newArray
}

function parsear(deptos,cargos){  
  let newArray = []

  deptos.map(it=>{    
    let iok = {}
      iok.id     = it.id
      iok.nombre = it.nombre
      let kok = []
    cargos.map(itt=>{                  
        if(it.id === parseInt(itt.departamentoId))
        {
          let ii = {
            id: itt.id,
            nombre: itt.nombre,
            departamentoId : itt.departamentoId,
            estado : itt.estado,
            personaId  : itt.personaId,
            contratoId : itt.contratoId 
          }
          kok.push(ii)
        }
      iok.cargos = kok  
    })
    newArray.push(iok)  
  })
  
  return newArray
}

export default EmpresaController;
