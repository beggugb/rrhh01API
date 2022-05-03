
import database from "../../src/models";
import jwt from "jsonwebtoken";
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Usuario, Sucursal, Rol, Almacen } = database;

class UsuarioService {

  static getData(pag,num,prop,value){
    return new Promise((resolve,reject) =>{
      let page = parseInt(pag);
      let der = num * page - num;
        Usuario.findAndCountAll({
          raw: true,
          nest: true,
          offset: der,
          limit: num,
          order: [[prop,value]],          
          attributes:["id","nombres","estado","almacenId"],
          include:[
            {model:Rol,as:"rol",attributes:["id","nombre"]},
            {model:Almacen,as:"almacen",attributes:["id","nombre"]}
          ],
          where: { id: { [Op.gt]: 1 }}, 
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

static login(username, password) {        
    return new Promise((resolve, reject) => {
      Usuario.findOne({        
        where: { username: { [Op.eq]: username } },  
        attributes: ['id','nombres','username','password','rolId','almacenId','isCajero'],
        include:[
          {model:Rol,as:"rol",attributes:["id","nombre"]}          
       ]
      }).then((user) => {
        if (!user) {          
          resolve({
            success: false,
            message: "Authentication fallida . Usuario no existe.",
            usuario: null,
          });
        } else {          
          user.comparePassword(password, (err, isMatch) => {            
            if (isMatch && !err) {
              let payload = { user_id: user.id, username: user.username };
              let token = jwt.sign(payload, "unity2022", {
                expiresIn: "2629746000",
              });
              resolve({
                auth: true,
                message: "Acceso correcto",
                usuario: user,
                token: token,
              });              
            } else {
              resolve({
                success: false,
                message: "Autenticación fallida. contraseña incorrecta.",
                usuario: null,
              });              
            }
          });
        }
      });
    });
  }
  static getItem(pky){
    return new Promise((resolve,reject) =>{
       Usuario.findByPk(pky,{
        raw: true,
        nest: true,
        include:[ {model: Almacen, as: "almacen",attributes:['id','nombre']}]        
       })
        .then((item)=> resolve(item))
        .catch((reason) => reject({ message: reason.message }))      
    })
  }

  static getSingle(pky){
    return new Promise((resolve,reject) =>{
       Usuario.findByPk(pky,{
        raw: true,
        nest: true,
        attributes:['id','nombres'],
        include:[ {model: Almacen, as: "almacen",attributes:['id','nombre']}]        
       })
        .then((item)=> resolve(item))
        .catch((reason) => reject({ message: reason.message }))      
    })
  }
  static getItems(){
    return new Promise((resolve,reject) =>{
        Usuario.findAll({
          raw: true,
          nest: true,                
          order: [['nombres','ASC']],
          attributes:[['nombres','label'],['id','value']]  
          })
        .then((row) => resolve(row))
        .catch((reason) => reject({ message: reason.message }))
    })
  } 
  static setUpdate(value,id){
    return new Promise((resolve,reject) =>{
        Usuario.update(value, { where: { id: Number(id) } })
        .then((row)=> resolve( row ))
        .catch((reason) => reject({ message: reason.message })) 
    })
  }
  static setAdd(value){
    return new Promise((resolve,reject) =>{
      Usuario.create(value)
        .then((row) => resolve( row ))
        .catch((reason)  => reject({ message: reason.message }))  
    })
} 

}
  export default UsuarioService; 