import { Router } from "express";
import controlador, { IndexController } from "../controllers/index.controller";
import getIdController from "../controllers/getId.controller";
import postController from "../controllers/post.controller";

var router: Router;
router = Router();
router.get('/persona/lista', controlador.MostrarLista);
router.get('/persona/lista/:id', getIdController.MostrarEspecifico);
router.post('/persona/actualizar/:id/:name', postController.ActualizarNombre);



export default router;
