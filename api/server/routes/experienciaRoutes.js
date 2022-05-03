import { Router } from 'express';
import ExperienciaController from '../controllers/ExperienciaController';

const router = Router();

router.get('/data/:pagina/:num/:prop/:orden',ExperienciaController.getData)
router.post('/:tipo', ExperienciaController.crear);
router.delete('/:id/:tipo',ExperienciaController.getDelete)
router.get('/item/:id',ExperienciaController.getItem)
router.put('/:id/:tipo',ExperienciaController.actualizar)
/**Crud
router.get('/data/:pagina/:num/:prop/:orden',ExperienciaController.getData)
router.delete('/:id/:tipo',ExperienciaController.getDelete)
router.post('/search/lista',ExperienciaController.search)
router.post('/:tipo', ExperienciaController.crear);

router.get('/list/:name/:value', ExperienciaController.getList); 
/*router.get('/items/:prop/:orden', ExperienciaController.getItems); // items select*/
export default router;
