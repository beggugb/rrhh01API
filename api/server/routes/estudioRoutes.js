import { Router } from 'express';
import EstudioController from '../controllers/EstudioController';

const router = Router();

router.get('/data/:pagina/:num/:prop/:orden',EstudioController.getData)
router.post('/:tipo', EstudioController.crear);
router.delete('/:id/:tipo',EstudioController.getDelete)
router.get('/item/:id',EstudioController.getItem)
router.put('/:id/:tipo',EstudioController.actualizar)
/**Crud
router.get('/data/:pagina/:num/:prop/:orden',EstudioController.getData)
router.delete('/:id/:tipo',EstudioController.getDelete)
router.post('/search/lista',EstudioController.search)
router.post('/:tipo', EstudioController.crear);

router.get('/list/:name/:value', EstudioController.getList); 
/*router.get('/items/:prop/:orden', EstudioController.getItems); // items select*/
export default router;
