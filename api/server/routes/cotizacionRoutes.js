import { Router } from 'express';
import CotizacionController from '../controllers/CotizacionController';

const router = Router();

router.get('/data/:pagina/:num/:prop/:orden',CotizacionController.getData)
router.post('/:tipo', CotizacionController.crear);
router.put('/:id/:tipo', CotizacionController.actualizar);
router.get('/item/:id', CotizacionController.resumen);
router.delete('/:id/:tipo', CotizacionController.borrar);
router.post('/search/lista',CotizacionController.search)
router.get('/items/:prop/:orden', CotizacionController.getItems);
export default router;
