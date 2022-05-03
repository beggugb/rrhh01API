import { Router } from 'express';
import MailController from '../controllers/MailController';

const router = Router();
/**Enviar Cotización */
router.post('/sendcotizacion', MailController.enviarCotizacion);
router.post('/getcotizacion', MailController.solicitarCotizacion); 
router.post('/sendprospecto', MailController.enviarProspecto); 
router.post('/sendcotizaciones', MailController.enviarCotizaciones);

export default router;
