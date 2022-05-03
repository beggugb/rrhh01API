import { Router } from 'express';
import InformesController from '../controllers/InformesController';

const router = Router();


//Compras
router.post('/buycons',InformesController.buycons)
router.post('/buyrango',InformesController.buyrango)
//Pagos
router.post('/payrango',InformesController.payrango)

//Ventas
router.post('/salecons',InformesController.salecons)
router.post('/salerango',InformesController.salerango)
//Cobros
router.post('/chargerango',InformesController.chargerango)

//Clientes
router.post('/clientcons',InformesController.clientcons)
router.post('/clientrango',InformesController.clientrango)

//Cotizaciones
router.post('/cotizacionrango',InformesController.cotizacionrango)

//Prospectos
router.post('/prospectorango',InformesController.prospectorango)


//Tickets
router.post('/ticketrango',InformesController.ticketrango)

//Inventarios
router.post('/existencias',InformesController.existencias)
router.post('/movimientos',InformesController.movimientos)

router.post('/inventory',InformesController.cexistencias)

//Comprobantes
router.post('/contabilidad',InformesController.contabilidad)

//Clientes
router.post('/estadocuentas',InformesController.estadoCuentas)

/*
router.post('/cajas',InformesController.cajas)
router.post('/pagos',InformesController.pagos)
router.post('/articulos',InformesController.articulos)

router.post('/estadocuentas',InformesController.estadoCuentas)*/

export default router;


