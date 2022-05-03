import { Router } from 'express';
import ProspectoClienteController from '../controllers/ProspectoClienteController';

const router = Router();
/** Simples 
router.get('/data/:pagina/:num/:prop/:orden',ProspectoClienteController.getData)
router.get('/item/:id',ProspectoClienteController.getItem)

router.put('/:id/:tipo',ProspectoClienteController.actualizar)
router.post('/search/lista',ProspectoClienteController.search)
/** Compuestos */
router.delete('/:id/:tipo',ProspectoClienteController.getDelete)
router.post('/:tipo', ProspectoClienteController.crear);

export default router;
