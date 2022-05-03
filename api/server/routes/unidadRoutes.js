import { Router } from 'express';
import UnidadController from '../controllers/UnidadController';

const router = Router();
/**Crud */
router.get('/data/:pagina/:num/:prop/:orden',UnidadController.getData)
router.get('/item/:id',UnidadController.getItem)
router.delete('/:id/:tipo',UnidadController.getDelete)
router.put('/:id/:tipo',UnidadController.actualizar)
router.post('/search/lista',UnidadController.search)
router.post('/:tipo', UnidadController.crear);

router.get('/list/:name/:value', UnidadController.getList); 
/*router.get('/items/:prop/:orden', UnidadController.getItems); // items select*/
export default router;
