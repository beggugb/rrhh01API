import { Router } from 'express';
import ContratoController from '../controllers/ContratoController';

const router = Router();
/** Simples */
router.get('/data/:pagina/:num/:prop/:orden',ContratoController.getData)
router.get('/item/:id',ContratoController.getItem)
router.get('/item/copiar/:id',ContratoController.setCopiar)
router.delete('/:id/:tipo',ContratoController.getDelete)
router.put('/:id/:tipo',ContratoController.actualizar)
router.post('/search/lista',ContratoController.search)
/** Compuestos */
router.post('/:tipo', ContratoController.crear);

export default router;
