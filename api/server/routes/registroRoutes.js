import { Router } from 'express';
import RegistroController from '../controllers/RegistroController';

const router = Router();

router.post('/:tipo', RegistroController.crear);
router.get('/item/:id',RegistroController.getItem)

/**Crud 
router.get('/data/:pagina/:num/:prop/:orden',MarcaController.getData)
router.get('/item/:id',MarcaController.getItem)
router.delete('/:id/:tipo',MarcaController.getDelete)
router.put('/:id/:tipo',MarcaController.actualizar)
router.post('/search/lista',MarcaController.search)
router.post('/:tipo', MarcaController.crear);

router.get('/list/:name/:value', MarcaController.getList); 
/*router.get('/items/:prop/:orden', MarcaController.getItems); // items select*/
export default router;
