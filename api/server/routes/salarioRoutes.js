import { Router } from 'express';
import SalarioController from '../controllers/SalarioController';

const router = Router();
/**Crud */
router.get('/data/:pagina/:num/:prop/:orden',SalarioController.getData)
router.get('/item/:id',SalarioController.getItem)
router.delete('/:id/:tipo',SalarioController.getDelete)
router.put('/:id/:tipo',SalarioController.actualizar)
router.post('/search/lista',SalarioController.search)
router.post('/:tipo', SalarioController.crear);
router.get('/list/:name/:value', SalarioController.getList); 
export default router;
