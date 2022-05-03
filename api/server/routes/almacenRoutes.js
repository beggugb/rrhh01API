import { Router } from 'express';
import AlmacenController from '../controllers/AlmacenController';

const router = Router();
/** Simples */
router.get('/data/:pagina/:num/:prop/:orden',AlmacenController.getData)
router.get('/item/:id',AlmacenController.getItem)
router.delete('/:id/:tipo',AlmacenController.getDelete)
router.put('/:id/:tipo',AlmacenController.actualizar)
router.post('/:tipo', AlmacenController.crear);


router.post('/search/lista',AlmacenController.listaStock)
router.get('/list/:name/:value', AlmacenController.getList);
/** Compuestos */


export default router;
