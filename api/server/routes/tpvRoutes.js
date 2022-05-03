import { Router } from 'express';
import TpvController from '../controllers/TpvController';
import ArticuloController from '../controllers/ArticuloController';

const router = Router();

router.get('/data/:pagina/:num/:prop/:orden',TpvController.getData)
router.post('/:tipo', TpvController.crear);
router.get('/search/lista/:item', TpvController.search)
router.post('/searchs/lista', TpvController.searchs)
export default router;
