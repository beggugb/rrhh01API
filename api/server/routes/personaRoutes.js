import { Router } from 'express';
import PersonaController from '../controllers/PersonaController';

const router = Router();
/** Simples */
router.get('/data/:pagina/:num/:prop/:orden',PersonaController.getData)
router.get('/item/:id',PersonaController.getItem)
router.get('/item/copiar/:id',PersonaController.setCopiar)
router.delete('/:id/:tipo',PersonaController.getDelete)
router.put('/:id/:tipo',PersonaController.actualizar)
router.post('/search/lista',PersonaController.search)
/** Compuestos */
router.post('/:tipo', PersonaController.crear);

export default router;
