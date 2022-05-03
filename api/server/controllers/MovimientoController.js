import AlmacenItemsService from "../services/AlmacenItemsService"
import NotaCobranzaService from "../services/NotaCobranzaService"
import PlanService from "../services/PlanService"
import ComprobanteController from "./ComprobanteController";
import TdcService from "../services/TdcService"
import MovimientoService from "../services/MovimientoService"
import MovimientoItemService from "../services/MovimientoItemService"

class MovimientoController { 

      /**Data Movimientos */
      static getData(req, res) {               
        MovimientoService.getData(req.params.pagina,req.params.num,'movimiento')
            .then((data) => {                                                          
                    let resData = data.data.map((item,index)=>{
                        let iok = {
                        "id"            : item.id,   
                        "fecha"         : item.fecha,
                        "tipo"          : item.tipo,
                        "origen"        : item.origen,
                        "destino"       : item.destino,
                        "nroItems"      : item.nroItems,                            
                        "observaciones" : item.observaciones,
                        "estado"        : item.estado                                     
                        }
                    return iok;
                    })  
              res.status(200).send({message:"movimientos lista", result: {data: resData, total: data.total, pagina: data.pagina,paginas:data.paginas} });            
            })                   
            .catch((reason) => { 
                console.log(reason)                     
              res.status(400).send({ message: reason });
            });         
    }

    /** Crear Cormpra **/
    static crear(req, res) {   
        const { item, items } = req.body 
        let d = new Date()
        let fechaMovimiento  = (new Date(d + 'UTC')).toISOString().replace(/-/g, '-').split('T')[0] 
        let fechaAnio    = d.getFullYear()
        let fechaMes     = d.getMonth() + 1

        //crear la movimiento tipo pedido , estado pendiente
        let newItem = item
        newItem.fecha      = fechaMovimiento
        newItem.estado     = 'pendiente'
        newItem.nroPagos   = 0        
        newItem.gestion    = fechaAnio
        newItem.mes        = fechaMes
        newItem.tipo       = 'movimiento'        

        MovimientoService.setAdd(newItem)
            .then((xitem)=>{                
                //creamos items vinculados a la movimiento
                let newItems = items.map((it,index)=>{
                    let iok = {
                        "movimientoId"   : xitem,
                        "cantidad"   : it.cantidad,  
                        "codigo"     : it.codigo,
                        "valor"      : parseFloat(it.valor),                        
                        "articuloId" : it.articuloId,
                        "gestion"    : fechaAnio,
                        "mes"        : fechaMes,
                        "subTotal"   : it.subTotal
                    }
                    return iok;
                })
                MovimientoItemsService.setAdd(newItems)
                    .then((yitem)=>{
                        Promise.all([MovimientoService.getItemSingle(xitem),MovimientoItemsService.getItems(xitem)])
                          .then(([item, xitems])=>{
                            let items = xitems.map((it,index)=>{
                                let eok = {
                                    "articuloId" : it.articuloId,
                                    "valor"      : it.valor,                                    
                                    "movimientoId"   : it.movimientoId,
                                    "subTotal"   : it.subTotal,                                    
                                    "unidad"     : it.unidad,
                                    "cantidad"   : it.cantidad,
                                    "nombre"     : it.articulo.nombre,
                                    "codigo"     : it.articulo.codigo
                                }
                                return eok;
                            })
                            res.status(200).send({message:"movimientos creada", result: { item, items }});
                          }) 
                          .catch((reason) => {  
                            console.log(reason)
                            res.status(400).send({ message: reason });
                          });
                    })
                    .catch((reason) => {   
                        console.log(reason)                         
                        res.status(400).send({ message: reason });
                    });
                })
            .catch((reason) => {   
                console.log(reason)                         
                res.status(400).send({ message: reason });
            }); 

    }
    /** Actualizar Cormpra **/
    static actualizar(req, res) {       
        const { item, items } = req.body                                  
          MovimientoItemsService.delete(item.id)
            .then((yitems) => {                                                         
                Promise.all([MovimientoItemsService.setAdd(items),MovimientoService.setUpdate(item,item.id)])
                   .then((umovimiento,uitems)=>{
                        Promise.all([MovimientoService.getItemSingle(item.id),MovimientoItemsService.getItems(item.id)])
                                .then(([item, xitems]) =>{               
                                    let items = xitems.map((it,index)=>{
                                        let eok = {
                                            "articuloId" : it.articuloId,
                                            "valor"      : it.valor,    
                                            "subTotal"   : it.subTotal,                                
                                            "movimientoId"   : it.movimientoId,                                            
                                            "cantidad"   : it.cantidad,
                                            "nombre"     : it.articulo.nombre,
                                            "codigo"     : it.articulo.codigo
                                        }
                                        return eok;
                                    })
                                    res.status(200).send({message:"movimientos lista", result: {item, items }});
                                }) 
                    }) 
                    .catch((reason) => {  
                       res.status(400).send({ message: reason });
                    });
            })                   
            .catch((reason) => {                       
              res.status(400).send({ message: reason });
            });         
    }
    /** Buscar Cormpra **/
    static search(req, res) {  
        const { prop, value, usuarioId, rolId } = req.body        
        MovimientoService.search(prop,value,usuarioId,rolId,'movimiento')
            .then((data)=>{
                let resData = data.data.map((item,index)=>{
                    let iok = {
                    "id"            : item.id,   
                    "fechaMovimiento"   : item.fechaMovimiento,
                    "tipo"          : item.tipo,
                    "totalGeneral"  : item.totalGeneral,
                    "observaciones" : item.observaciones,
                    "estado"        : item.estado,
                    "proveedor"     : item.proveedor.razonSocial                    
                    }
                return iok;
                })  
                res.status(200).send({message:"movimientos lista", result: {data: resData, total: data.total, pagina: data.pagina,paginas:data.paginas} }); 
            })                  
            .catch((reason) => {                            
              res.status(400).send({ message: reason });
            });         
    }
    
  
    /** Borra Movimiento */
    static borrar(req, res) {     
        const { usuarioId, rolId } = req.body                                
        MovimientoItemsService.delete(req.params.id)
          .then((yitems)=>{                                                  
             MovimientoService.delete(req.params.id)
                .then((yitem)=>{
                    MovimientoService.getData(1,15,'movimiento')
                       .then((data)=>{
                            let resData = data.data.map((item,index)=>{
                                    let iok = {
                                    "id"             : item.id,   
                                    "fechaMovimiento"    : item.fechaMovimiento,
                                    "tipo"           : item.tipo,
                                    "totalGeneral"          : item.totalGeneral,
                                    "observaciones"  : item.observaciones,
                                    "estado"         : item.estado,
                                    "proveedor"      : item.proveedor.razonSocial,            
                                    }
                                return iok;
                                })  
                                res.status(200).send({message:"movimientos lista", result: {data: resData, total: data.total, pagina: data.pagina,paginas:data.paginas} }); 
                        })
                })
            })                 
           .catch((reason) => {                          
              res.status(400).send({ message: reason });
           });         
    }

    /** Resumen Movimientos */
    static resumen(req, res) {   
        //Mostrar Movimiento
        MovimientoService.getItemSingle(req.params.id)
            .then((xitem)=>{
                if(xitem.estado === "cerrado")
                {
                 Promise.all([MovimientoService.getItem(req.params.id),MovimientoItemsService.getItems(req.params.id),NotaCobranzaService.getKey("movimientoId",req.params.id)])   
                   .then(([item,data,nota])=>{
                        let items = data.map((item,index)=>{
                            let iok = {
                            "id"           : item.id,   
                            "cantidad"     : item.cantidad,
                            "valor"        : item.valor,      
                            "subTotal"     : item.subTotal,  
                            "unidad"       : item.unidad,          
                            "articuloId"   : item.articuloId,                                                                      
                            "nombre"       : item.articulo.nombre,                        
                            "codigo"       : item.articulo.codigo,                                 
                            "movimientoId"     : item.movimientoId,              
                            "nombreCorto"  : item.articulo.nombreCorto
                            }
                        return iok;
                        })                             
                        PlanService.getItems(nota.id)
                            .then((plan)=>{                        
                            res.status(200).send({message:"movimiento resumen", result: {item, items, nota, plan }});    
                            })
                            .catch((reason) => {
                                console.log(reason)
                                res.status(400).send({ message: reason });
                             });
                   })
                   .catch((reason) => {
                    console.log(reason)
                    res.status(400).send({ message: reason });
                   }); 
                }else{
                    Promise.all([MovimientoService.getItem(req.params.id),MovimientoItemsService.getItems(req.params.id)])   
                    .then(([item,data])=>{
                         let items = data.map((item,index)=>{
                             let iok = {
                             "id"           : item.id,   
                             "cantidad"     : item.cantidad,
                             "valor"        : item.valor,     
                             "subTotal"     : item.subTotal,    
                             "unidad"       : item.unidad,                   
                             "articuloId"   : item.articuloId,                                                                      
                             "nombre"       : item.articulo.nombre,                        
                             "codigo"       : item.articulo.codigo,     
                             "movimientoId"     : item.movimientoId,              
                             "nombreCorto"  : item.articulo.nombreCorto
                             }
                         return iok;
                         })                             
                         
                        res.status(200).send({message:"movimiento resumen", result: {item, items }});    
                         
                    }) 
                    .catch((reason) => {
                        console.log(reason)
                        res.status(400).send({ message: reason });
                    });
                }
            })
            .catch((reason) => {
               console.log(reason)
               res.status(400).send({ message: reason });
            });
        
    }

    /** Aprobar Movimiento */    
    static aprobar(req, res) {          
      let d = new Date()
      let fechaMovimiento  = (new Date(d + 'UTC')).toISOString().replace(/-/g, '-').split('T')[0]      
      var fechaGestion = d.getFullYear()
      var fechaMes     = d.getMonth() + 1
      const { item, items, contado, banco, inicial,cuota,total, usuarioId } = req.body    
      console.log(item)          
    }  

    
    



      
    
}


export default MovimientoController;
