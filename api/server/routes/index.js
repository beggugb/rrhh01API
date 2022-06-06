import KeyToken from './keyToken'
import usuarios from './usuarioRoutes'
import empresas from './empresaRoutes'
import departamentos from './departamentoRoutes'
/*import files from './fileRoutes'*/
import proceso from './procesoRoutes'
import tarea from './tareaRoutes'
import personas from './personaRoutes'
import salarios from './salarioRoutes'
import horarios from './horarioRoutes'
import contratos from './contratoRoutes'
import cargos from './cargoRoutes'
import estudios from './estudioRoutes'
import experiencias from './experienciaRoutes'
/*import unidades from './unidadRoutes'*/
import registro from './registroRoutes'

export default(app) => {    
    app.use('/api/usuarios',usuarios);              
    app.use('/api/departamentos',departamentos)	
    app.use('/api/empresas',empresas);
    app.use('/api/registros',registro);	
    app.use('/api/procesos',KeyToken,proceso);                            
    app.use('/api/tareas',KeyToken,tarea);    
    app.use('/api/personas',KeyToken,personas);
    app.use('/api/horarios',KeyToken,horarios);
    app.use('/api/salarios',KeyToken,salarios);
    app.use('/api/contratos',KeyToken,contratos);
    app.use('/api/cargos',KeyToken,cargos);    
    app.use('/api/estudios',KeyToken,estudios);
    app.use('/api/experiencias',KeyToken,experiencias);    
}

