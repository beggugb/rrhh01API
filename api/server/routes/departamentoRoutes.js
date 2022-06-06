import { Router } from 'express';
import DepartamentoController from '../controllers/DepartamentoController';

const router = Router();
/**Crud */
router.get('/data/:pagina/:num/:prop/:orden',DepartamentoController.getData)
router.get('/item/:id',DepartamentoController.getItem)
router.delete('/:id/:tipo',DepartamentoController.getDelete)
router.put('/:id/:tipo',DepartamentoController.actualizar)
router.post('/search/lista',DepartamentoController.search)
router.post('/:tipo', DepartamentoController.crear);

router.get('/list/:name/:value', DepartamentoController.getList); 
/*router.get('/items/:prop/:orden', DepartamentoController.getItems); // items select*/
export default router;
