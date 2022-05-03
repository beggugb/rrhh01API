import { Router } from 'express';
import ProspectoController from '../controllers/ProspectoController';

const router = Router();
/** Simples */
router.get('/data/:pagina/:num/:prop/:orden',ProspectoController.getData)
router.get('/item/:id',ProspectoController.getItem)
router.delete('/:id/:tipo',ProspectoController.getDelete)
router.put('/:id/:tipo',ProspectoController.actualizar)
router.post('/search/lista',ProspectoController.search)
/** Compuestos */
router.post('/:tipo', ProspectoController.crear);

export default router;
