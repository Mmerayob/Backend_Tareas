import { Request, Response } from "express";
import lista from "../services/data";

export class IndexController{
    public MostrarLista(req:Request, res:Response) {
        res.json(lista)
        
    }

}

export default new IndexController();