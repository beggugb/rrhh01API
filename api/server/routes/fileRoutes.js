import { Router } from 'express';
import FileController from '../controllers/FileController';

const router = Router();
router.put('/articulo/item/:id', FileController.articulos);
router.put('/proveedor/item/:id', FileController.proveedores);
router.put('/cliente/item/:id', FileController.clientes);
router.put('/clientenit/item/:id', FileController.clientesNit);
router.put('/clienteci/item/:id', FileController.clientesCi);
router.put('/empresa/item/:id', FileController.empresa);
router.put('/persona/item/:id', FileController.persona);
export default router;

