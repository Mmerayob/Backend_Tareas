import { Request, Response } from "express";
import lista from "../services/data";

export class getIdController {

    public MostrarEspecifico(req: Request, res: Response) {

        let id = parseInt(req.params.id);
        res.json(lista.filter(x => x.id == id))
    }
}

export default new getIdController();