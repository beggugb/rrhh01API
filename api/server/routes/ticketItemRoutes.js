import { Router } from 'express';
import TicketItemController from '../controllers/TicketItemController';

const router = Router();
/**Crud */
router.get('/data/:pagina/:num/:prop/:orden',TicketItemController.getData)
router.post('/:tipo', TicketItemController.crear);
export default router;
