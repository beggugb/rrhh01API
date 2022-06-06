import RegistroService from "../services/RegistroService";
import ContratoService from "../services/ContratoService";
import PersonaService from "../services/PersonaService";
import HorarioService from "../services/HorarioService";

class RegistroController {  

  static getItem(req, res) {                           
    RegistroService.getAsistencia(req.params.id)
        .then((items) => {                
          let data = items.map((it,index)=>{
            let eok = {
                "id"           : it.id,
                "fecha"        : it.fecha,
                "departamento" : it.departamento.nombre,
                "nombre"       : it.persona.nombres +' , '+it.persona.paterno+' '+it.persona.materno,
                "filename"     : it.persona.filename,
                "r1"           : it.r1,
                "r2"           : it.r2,
                "r3"           : it.r3,
                "r4"           : it.r4
            }
            return eok;
        })
        res.status(200).send({message:"marca item", result: data });                                               
        })                   
        .catch((reason) => {                       
          res.status(400).send({ message: reason });
        });         
  }

  static crear(req, res) {           
      const { ci } = req.body      
      let d = new Date()
      let fregistro  = (new Date(d + 'UTC')).toISOString().replace(/-/g, '-').split('T')[0] 
      console.log(ci)
      PersonaService.verificarCI(ci)
      .then((xpersona)=>{
        //verificar si existe
        if(xpersona){
          ContratoService.verificarVigencia(xpersona.id)
          .then((xcontrato)=>{            
            HorarioService.getItem(xcontrato.horarioId)
              .then((xhorario)=>{        
                RegistroService.verificar(xcontrato.personaId)
                .then((xregistro)=>{     
                  /************** */                  
                  let ddt = campo(xhorario,xregistro,xcontrato.salario.montoMinutos)
                  ddt.fecha      = fregistro
                  ddt.monto      = xcontrato.salario.monto
                  ddt.personaId  = xcontrato.personaId,
                  ddt.contratoId = xcontrato.id
                  ddt.departamentoId = xcontrato.cargo.departamentoId
                  if(ddt.d === 'd1')
                  {
                    RegistroService.setAdd(ddt)
                    .then((results)=>{
                      RegistroService.getItem(results.id)
                      .then((result)=>{
                        res.status(200).send({message:"registro correcto", result });
                      })  
                      .catch((reason) => {              
                        console.log(reason)  
                        res.status(400).send({ message: reason });                
                      });
                    })
                  }else{
                    RegistroService.setUpdate(ddt,xregistro.id)
                    .then((yservice)=>{
                      RegistroService.getItem(xregistro.id)
                      .then((result)=>{
                        res.status(200).send({message:"registro correcto", result });
                      })  
                      .catch((reason) => {              
                        console.log(reason)  
                        res.status(400).send({ message: reason });                
                      });
                    })
                  }
                  /************** */                  
                })
                .catch((reason) => {              
                  console.log(reason)  
                  res.status(400).send({ message: reason });                
                });
              })
              .catch((reason) => {              
                console.log("No tiene horario asignado")  
                res.status(400).send({ message: reason });                
              });
          })
        }else{
          console.log("No tiene contrato vigente")
          res.status(400).send({message:"No tiene contrato vigente"});
        }        
      }) 
      .catch((reason) => {              
        console.log(reason)  
        res.status(400).send({ message: reason });
      });                 
    }    

}

function addZeroBefore(n) {
  return (n < 10 ? '0' : '') + n;
}

function campo(horario,registro,salario){    

  let d         = new Date()  
  let marcado   = addZeroBefore(d.getHours())+':'+addZeroBefore(d.getMinutes())    
  let ios       = parseInt(d.getHours())
  let d1        = parseInt(horario.d1.split(":")[0])
  let d2        = parseInt(horario.d2.split(":")[0])
  let d3        = parseInt(horario.d3.split(":")[0])
  let d4        = parseInt(horario.d4.split(":")[0])
  let iok       = {}
  
  if(registro === null){      
    iok={
        d         : "d1",
        hora      : d.getHours(),
        minutos   : d.getMinutes(),  
        minuto    : getValor(horario.d1),                      
        r1        : marcado,
        d1        : getValor(horario.d1) * parseFloat(salario)
    }
  }else if(registro.r2 === null){      
          iok={
              d         : "d2",
              hora      : d.getHours(),
              minutos   : d.getMinutes(),  
              minuto    : getValor(horario.d2),                      
              r2        : marcado,
              d2        : getValor(horario.d2) * parseFloat(salario)
          }
        }else if(registro.r3 === null){      
          iok={
              d         : "d3",
              hora      : d.getHours(),
              minutos   : d.getMinutes(),  
              minuto    : getValor(horario.d3),                      
              r3        : marcado,
              d3        : getValor(horario.d3) * parseFloat(salario)
          }
        } else if(registro.r4 === null){      
          iok={
              d         : "d4",
              hora      : d.getHours(),
              minutos   : d.getMinutes(),  
              minuto    : getValor(horario.d4),                      
              r4        : marcado,
              d4        : getValor(horario.d4) * parseFloat(salario)
          }
        }
   
  return iok
}
function getValor(horario){

  let dok = 0  
  let d         = new Date()    
  let lHora   = d.getHours()
  let lMinute = d.getMinutes() 

  let aHora   = horario.split(":")[0]
  let aMinute = horario.split(":")[1]     

  if( parseInt(aHora) > parseInt(lHora) )
  {    
    dok   = 0
  }else{
    let iok  = parseInt(lHora) - parseInt(aHora) 
    let bok  = parseInt(iok) * 60
    dok      = parseInt(bok) + (parseInt(lMinute) - parseInt(aMinute))
  }  

  return dok
}

export default RegistroController;
