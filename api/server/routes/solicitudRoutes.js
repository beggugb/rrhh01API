import { Router } from 'express';
import SolicitudController from '../controllers/SolicitudController';

const router = Router();

router.get('/data/:pagina/:num/:prop/:orden',SolicitudController.getData)
router.post('/:tipo', SolicitudController.crear);
router.put('/:id/:tipo', SolicitudController.actualizar);
router.put('/aprobar/:id/:tipo', SolicitudController.aprobar);
router.get('/item/:id', SolicitudController.resumen);
router.delete('/:id/:tipo', SolicitudController.borrar);
router.post('/search/lista',SolicitudController.search)

export default router;
