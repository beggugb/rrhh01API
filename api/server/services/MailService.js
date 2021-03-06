import database from "../../src/models";
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Marca } = database;
import nodeMailer from "nodemailer";
class MailService {
  
  static getCotizaciones(compraId,subject,empresa,usuario) {                
    return new Promise((resolve, reject) => {      
        let transporter = nodeMailer.createTransport({
          host: empresa.smtpHost,
          port: empresa.smtpPort,
          secure: true,
          auth: {
            user: empresa.smtpUser,
            pass: empresa.smtpPassword,
          },
        });
        
        let template    = cotizaciones(compraId,usuario.razonSocial,usuario.email);
        let templateMsg = subject;
        let emailUser   = usuario.email;
     
       
        let mailOptions = {
          to: emailUser,
          subject: templateMsg,
          html: template,
          attachments: [
            {   
                filename: `cotizaciones${compraId}.pdf`,
                path: `${process.cwd()}/api/public/documents/cotizaciones${compraId}.pdf`
            }] 
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            resolve({ mail: error });
          }
          resolve({ mail: "ok" });
        });
      });
} 
  static getProspecto(prospectoId,subject,empresa,usuario) {                
    return new Promise((resolve, reject) => {      
        let transporter = nodeMailer.createTransport({
          host: empresa.smtpHost,
          port: empresa.smtpPort,
          secure: true,
          auth: {
            user: empresa.smtpUser,
            pass: empresa.smtpPassword,
          },
        });
        
        let template    = prospecto(prospectoId,usuario.nombres,usuario.email);
        let templateMsg = subject;
        let emailUser   = usuario.email;
     
       
        let mailOptions = {
          to: emailUser,
          subject: templateMsg,
          html: template,
          attachments: [
            {   
                filename: `promocion${prospectoId}.pdf`,
                path: `${process.cwd()}/api/public/documents/promocion${prospectoId}.pdf`
            }] 
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            resolve({ mail: error });
          }
          resolve({ mail: "ok" });
        });
      });
} 
    static sendCotizacion(cotizacionId,empresa,nombres,email) {                     
      return new Promise((resolve, reject) => {
            let transporter = nodeMailer.createTransport({
              host: empresa.smtpHost,
              port: empresa.smtpPort,
              secure: true,
              auth: {
                user: empresa.smtpUser,
                pass: empresa.smtpPassword,
              },
            });
            
            let template    = cotizacion(cotizacionId,nombres,email);
            let templateMsg = "Cotizaci??n de art??culos";
            let emailUser   = email;
         
           
            let mailOptions = {
              to: emailUser,
              subject: templateMsg,
              html: template,
              attachments: [
                {   
                    filename: `cotizacion${cotizacionId}.pdf`,
                    path: `${process.cwd()}/api/public/documents/cotizacion${cotizacionId}.pdf`
                }] 
            };
        
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
               resolve({ mail: error });
              }else{
                resolve({ mail: "ok" });
              }              
            });
      });
    } 
    static getCotizacion(compraId,empresa,nombres,email) {                
      return new Promise((resolve, reject) => {
          let transporter = nodeMailer.createTransport({
            host: empresa.smtpHost,
            port: empresa.smtpPort,
            secure: true,
            auth: {
              user: empresa.smtpUser,
              pass: empresa.smtpPassword,
            },
          });
          
          let template    = getcotizacion(compraId,nombres,email);
          let templateMsg = "Solicitud de cotizaci??n";
          let emailUser   = email;
       
         
          let mailOptions = {
            to: emailUser,
            subject: templateMsg,
            html: template,
            attachments: [
              {   
                  filename: `cotizacionCompra${compraId}.pdf`,
                  path: `${process.cwd()}/api/public/documents/cotizacionCompra${compraId}.pdf`
              }] 
          };
      
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              resolve({ mail: error });
            }
            resolve({ mail: "ok" });
          });
        });
    } 

    
}
function cotizaciones(id,nombres, email){
  let d      = new Date() 
  let fecha  = (new Date(d + 'UTC')).toISOString().replace(/-/g, '-').split('T')[0] 
  let hora   = d.getHours() +':'+ d.getMinutes()

    let template =`<body><h2>Cotizaci??n N?? ${id}</h2>      
                    <p><b>Proveedor :</b> ${nombres}</p>
                    <p><b>Email :</b> ${email}</p>
                    <p><b>Fecha :</b> ${fecha}</p>
                    <p><b>Hora :</b> ${hora}</p>
                    <p>                        
                    <p>Adjunta la solicitud de cotizaci??n</p>                                    
                    <p>En esta direcci??n de correo recibir??s solo lo importante. </p>                                    
                    <p>UNITY 2.1</p>
                  </body>`
    return template                  
}
function prospecto(id,nombres, email){
  let d      = new Date() 
  let fecha  = (new Date(d + 'UTC')).toISOString().replace(/-/g, '-').split('T')[0] 
  let hora   = d.getHours() +':'+ d.getMinutes()

    let template =`<body><h2>Promoci??n N?? ${id}</h2>      
                    <p><b>Cliente :</b> ${nombres}</p>
                    <p><b>Email :</b> ${email}</p>
                    <p><b>Fecha :</b> ${fecha}</p>
                    <p><b>Hora :</b> ${hora}</p>
                    <p>                        
                    <p>Adjunta la promoci??n</p>                                    
                    <p>En esta direcci??n de correo recibir??s solo lo importante. </p>                                    
                    <p>UNITY 2.1</p>
                  </body>`
    return template                  
}
function getcotizacion(id,nombres, email){
  let d      = new Date() 
  let fecha  = (new Date(d + 'UTC')).toISOString().replace(/-/g, '-').split('T')[0] 
  let hora   = d.getHours() +':'+ d.getMinutes()

    let template =`<body><h2>Cotizaci??n N?? ${id}</h2>      
                    <p><b>Proveedor :</b> ${nombres}</p>
                    <p><b>Email :</b> ${email}</p>
                    <p><b>Fecha :</b> ${fecha}</p>
                    <p><b>Hora :</b> ${hora}</p>
                    <p>                        
                    <p>Adjunta la Cotizaci??n solicitada</p>                                    
                    <p>En esta direcci??n de correo recibir??s solo lo importante. </p>                                    
                    <p>UNITY 2.1</p>
                  </body>`
    return template                  
}
function cotizacion(id,nombres, email){
  let d      = new Date() 
  let fecha  = (new Date(d + 'UTC')).toISOString().replace(/-/g, '-').split('T')[0] 
  let hora   = d.getHours() +':'+ d.getMinutes()

    let template =`<body><h2>Cotizaci??n N?? ${id}</h2>      
                    <p><b>Cliente :</b> ${nombres}</p>
                    <p><b>Email :</b> ${email}</p>
                    <p><b>Fecha :</b> ${fecha}</p>
                    <p><b>Hora :</b> ${hora}</p>
                    <p>                        
                    <p>Adjunta la Cotizaci??n realizada</p>                                    
                    <p>En esta direcci??n de correo recibir??s solo lo importante. </p>                                    
                    <p>UNITY 2.1</p>
                  </body>`
    return template                  
}
 
export default MailService;
