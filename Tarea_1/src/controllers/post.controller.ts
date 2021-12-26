import { Request, Response } from "express";
import lista from "../services/data";

export class PostController {

    public ActualizarNombre(req: Request, res: Response) {
        let id = parseInt(req.params.id);
        let nombre = req.params.name;

        let persona = lista.find(x => x.id == id);
        if (persona) {
            persona.nombre = nombre;
        }

        res.send("Recibido")
    }
}

export default new PostController();