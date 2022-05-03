import { Router } from 'express';
import VentaController from '../controllers/VentaController';

const router = Router();

router.get('/data/:pagina/:num/:prop/:orden',VentaController.getDataCliente)
export default router;
