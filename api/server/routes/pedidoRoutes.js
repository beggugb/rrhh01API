import { Router } from 'express';
import PedidoController from '../controllers/PedidoController';

const router = Router();

router.get('/data/:pagina/:num/:prop/:orden',PedidoController.getData)
router.post('/:tipo', PedidoController.crear);
router.put('/:id/:tipo', PedidoController.actualizar);
router.put('/aprobar/:id/:tipo', PedidoController.aprobar);
router.get('/item/:id', PedidoController.resumen);
router.delete('/:id/:tipo', PedidoController.borrar);
router.post('/search/lista',PedidoController.search)

export default router;
