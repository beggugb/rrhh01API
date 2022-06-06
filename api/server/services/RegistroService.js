import database from "../../src/models";
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Registro, Persona, Departamento } = database;

class RegistroService {

  static getAsistencia(departamentoId){
    return new Promise((resolve,reject) =>{
      let d     = new Date()
      let fecha = (new Date(d + 'UTC')).toISOString().replace(/-/g, '-').split('T')[0]           
        Registro.findAll({
          raw: true,
          nest: true,                
          order: [['id','asc']],
          attributes:["id","fecha","personaId","departamentoId","r1","r2","r3","r4"],
          include:[
            {model:Departamento,as:"departamento",attributes:["id","nombre"]},
            {model:Persona,as:"persona",attributes:["id","nombres","paterno","materno","filename"]}
          ], 
          where: {[Op.and]: [
            { fecha: fecha},            
            { departamentoId: departamentoId}
           ]},
          })
        .then((row) => resolve(row))
        .catch((reason) => reject({ message: reason.message }))
    })
  }
  static getList(prop,value){
    return new Promise((resolve,reject) =>{
        Registro.findAll({
          raw: true,
          nest: true,                
          order: [[prop,value]],
          attributes:[[prop,'label'],['id','value']]  
          })
        .then((row) => resolve(row))
        .catch((reason) => reject({ message: reason.message }))
    })
  }

    static verificar(personaId){
        return new Promise((resolve,reject) =>{
          let d     = new Date()
          let fecha = (new Date(d + 'UTC')).toISOString().replace(/-/g, '-').split('T')[0]           
            Registro.findOne({
              raw: true,
              nest: true,              
              where: {[Op.and]: [
                { fecha: fecha},            
                { personaId: personaId},
               ]},
            })
            .then((row)=> resolve( row ))
            .catch((reason) => reject({ message: reason.message }))
        })
      }

    static setAdd(value){
        return new Promise((resolve,reject) =>{
            Registro.create(value)
            .then((row) => resolve( row ))
            .catch((reason)  => reject({ message: reason.message }))  
        })
    } 

    static getItem(pky){
        return new Promise((resolve,reject) =>{
            Registro.findByPk(pky,{
              raw: true,
              nest: true,
              attributes:["id","fecha","r1","d1","r2","d2","r3","d3","r4","d4"],
              include:[
                {model:Persona,as:"persona",
                attributes:["id","nombres","paterno","materno","filename","ci"]}                
              ] 
            })
            .then((row)=> resolve( row ))
            .catch((reason) => reject({ message: reason.message }))
        })
    } 
    
    static getList(prop,value){
        return new Promise((resolve,reject) =>{
            Registro.findAll({
              raw: true,
              nest: true,                
              order: [[prop,value]],
              attributes:[[prop,'label'],['id','value']]  
              })
            .then((row) => resolve(row))
            .catch((reason) => reject({ message: reason.message }))
        })
    }

       
    static setUpdate(value,id){
        return new Promise((resolve,reject) =>{
            Registro.update(value, { where: { id: Number(id) } })
            .then((row)=> resolve( row ))
            .catch((reason) => reject({ message: reason.message })) 
        })
    }
    
    static setAdd(value){
        return new Promise((resolve,reject) =>{
            Registro.create(value)
            .then((row) => resolve( row ))
            .catch((reason)  => reject({ message: reason.message }))  
        })
    } 

    static getData(pag,num,prop,value){
        return new Promise((resolve,reject) =>{
          let page = parseInt(pag);
          let der = num * page - num;
            Registro.findAndCountAll({
              raw: true,
              nest: true,
              offset: der,
              limit: num,
              order: [[prop,value]]
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

    static delete(datoId) {
        return new Promise((resolve, reject) => {
          Registro.destroy({ where: { id: Number(datoId) } })
            .then((rows) => resolve({ message: 'eliminado' }))
            .catch((reason)  => reject({ message: reason.message }))      
        });
    }

   
   

    static search(prop,value){
      return new Promise((resolve,reject) =>{            
          let iValue = '%' + value + '%'
          if (value === '--todos--' || value === null || value === '0') { iValue = '%' }            
          Registro.findAndCountAll({
              raw: true,
              nest: true,
              offset: 0,
              limit: 12,
              where: { [prop]: { [Op.iLike]: iValue }},
              order: [[prop,'ASC']]
          })		
          .then((rows) => resolve({
              paginas: Math.ceil(rows.count / 12),
              pagina: 1,
              total: rows.count,
              data: rows.rows
          } 
          ))
      .catch((reason)  => reject({ message: reason.message })) 
       })
     }

    static getItems(categoriaId){        
        return new Promise((resolve,reject) =>{
            let iCategoria = categoriaId
            let fCategoria = categoriaId
            
            if(categoriaId === 0 || categoriaId === '0' || categoriaId === 'undefined' ) 
            { iCategoria = 0, fCategoria = 5000 }   

            Registro.findAll({
              raw: true,
              nest: true,                
              order: [['nombre','ASC']],
              attributes:[['nombre','label'],['id','value']],
              /*attributes:['categoriaId',['nombre','label'],['id','value']],*/
              /*where :{categoriaId: {[Op.between]: [iCategoria,fCategoria]}},*/
              })
            .then((row) => resolve(row))
            .catch((reason) => reject({ message: reason.message }))
        })
    } 
    
}
export default RegistroService;
