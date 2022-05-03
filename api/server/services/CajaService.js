import database from "../../src/models";
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Caja, Usuario } = database;

class CajaService {
  
  static getData(pag,num,prop,rolId){
    return new Promise((resolve,reject) =>{      
      let iok = (rolId === 1 || rolId === '1' || rolId === 3 || rolId === '3') ? 0: prop 
      console.log(iok)
      let page = parseInt(pag);
      let der = num * page - num;
        Caja.findAndCountAll({
          raw: true,
          nest: true,
          offset: der,
          limit: num,
          order: [['id','DESC']],                             
          where: {[Op.and]: [            
            { usuarioId: { [(rolId === 1 || rolId === '1' || rolId === 3 || rolId === '3') ? Op.gt:Op.eq]: iok }},
           ]},
          include: [
            { model: Usuario,as: "usuario", attributes: ["id", "nombres"]}
          ] 
        })
        .then((rows) => resolve({
          paginas: Math.ceil(rows.count / num),
          pagina: page,
          total: rows.count,
          data: rows.rows
        }))
        .catch((reason) => reject({ message: reason.message }))
    })
  }
    
    static setAdd(dato){
        return new Promise((resolve,reject) =>{
            Caja.create(dato)
            .then((row) => resolve( row ))
            .catch((reason)  => reject({ message: reason.message }))  
        })
    }  
    static setUpdate(value,id){
        return new Promise((resolve,reject) =>{
            Caja.update(value, { where: { id: Number(id) } })
            .then((row)=> resolve( row ))
            .catch((reason) => reject({ message: reason.message })) 
        })
    }
    static getItem(pky){
      return new Promise((resolve,reject) =>{
          Caja.findByPk(pky,{
            raw: true,
            nest: true,
            include: [
              { model: Usuario,as: "usuario", attributes: ["id", "nombres"]}
            ] 
          })
          .then((row)=> resolve( row ))
          .catch((reason) => reject({ message: reason.message }))
      })
    }

    static getItemUsuario(usuarioId){
        return new Promise((resolve,reject) =>{
            let d     = new Date()
            let fcaja = (new Date(d + 'UTC')).toISOString().replace(/-/g, '-').split('T')[0] 
            console.log(fcaja)
            Caja.findOne({
              raw: true,
              nest: true,              
              where :  {
                [Op.and]: [
                    { estado : false },
                    { fechaCaja : fcaja },
                    { usuarioId : Number(usuarioId) }
                ] 
              },
            })
            .then((row)=> resolve( row ))
            .catch((reason) => reject({ message: reason.message }))
        })
    }
  
  static getDetalle(desde,hasta,usuarioId){
    return new Promise((resolve,reject) =>{         
      Caja.findAndCountAll({
          raw:true,
          nest:true,          
          where: {[Op.and]: [
            { fechaCaja: { [Op.between]: [desde, hasta]}},
            /*{ estado: true},*/
            { usuarioId: { [usuarioId === 0 ? Op.gt:Op.eq]: usuarioId}},
           ]},
          /*attributes:["id","fechaCompra","tipo","total","observaciones","estado"],*/      
          attributes:["id","estado","montoInicial","montoEgreso","montoIngreso","montoFinal","fechaCierre","fechaCaja","usuarioId"],  
          include:[
            {model:Usuario,as:"usuario",attributes:["id","nombres"]}  
          ] 
        })
        .then((rows) => resolve({                    
          total: rows.count,
          data: rows.rows          
        }))
        .catch((reason)  => reject({ message: reason.message }))  
    })
  }





}
export default CajaService; 
