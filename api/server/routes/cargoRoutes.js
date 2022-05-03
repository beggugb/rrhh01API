import { Router } from 'express';
import CargoController from '../controllers/CargoController';

const router = Router();
/**Crud */
router.get('/data/:pagina/:num/:prop/:orden',CargoController.getData)
router.get('/item/:id',CargoController.getItem)
router.delete('/:id/:tipo',CargoController.getDelete)
router.put('/:id/:tipo',CargoController.actualizar)
router.post('/search/lista',CargoController.search)
router.post('/:tipo', CargoController.crear);

router.get('/list/:name/:value', CargoController.getList); 
/*router.get('/items/:prop/:orden', CargoController.getItems); // items select*/
export default router;
