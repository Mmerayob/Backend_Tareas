import express, { Application } from "express"
import morgan from "morgan"
import cors from "cors"
import indexRouter from '../routes/index.routes'

export class Server {

    app:Application;

    constructor(){
        this.app = express();
        this.configuration();
        this.SetRouters();
    }

    configuration(){
        this.app.set('port', 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());

    }

    SetRouters(){

        this.app.use('/api',indexRouter);
        
    }
    Start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log("Lo está escuchando en el puerto 3000");
        })
    }

}