import { Router } from 'express';
import MovimientoController from '../controllers/MovimientoController';

const router = Router();

router.get('/data/:pagina/:num/:prop/:orden',MovimientoController.getData)
router.post('/:tipo', MovimientoController.crear);
router.put('/:id/:tipo', MovimientoController.actualizar);
router.put('/aprobar/:id/:tipo', MovimientoController.aprobar);
router.get('/item/:id', MovimientoController.resumen);
router.delete('/:id/:tipo', MovimientoController.borrar);
router.post('/search/lista',MovimientoController.search)

export default router;
