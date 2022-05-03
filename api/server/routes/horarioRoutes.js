import { Router } from 'express';
import HorarioController from '../controllers/HorarioController';

const router = Router();
/**Crud */
router.get('/data/:pagina/:num/:prop/:orden',HorarioController.getData)
router.get('/item/:id',HorarioController.getItem)
router.delete('/:id/:tipo',HorarioController.getDelete)
router.put('/:id/:tipo',HorarioController.actualizar)
router.post('/search/lista',HorarioController.search)
router.post('/:tipo', HorarioController.crear);

router.get('/list/:name/:value', HorarioController.getList); 
/*router.get('/items/:prop/:orden', HorarioController.getItems); // items select*/
export default router;
