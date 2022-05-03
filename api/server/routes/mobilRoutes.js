import { Router } from 'express';
import MobilController from '../controllers/MobilController';
import KeyToken from './keyToken'
const router = Router();

/*Usuarios*/
router.post('/usuarios/login', MobilController.login);
/*Clientes*/
router.get('/clientes/data/:pagina/:num/:prop/:orden',MobilController.getDataClientes)
router.get('/clientes/item/:id', MobilController.getItemCliente)
router.post('/clientes/search/lista',MobilController.getSearchCliente)
/*Ventas*/
router.get('/ventas/data/:pagina/:num/:prop/:orden',MobilController.getDataVentas) //
router.post('/ventas/unit',MobilController.crearVenta) //
router.put('/ventas/:id/unit',MobilController.actualizarVenta) //

/*Productos */
router.post('/productos/data',MobilController.getDataProductos) //

export default router;
