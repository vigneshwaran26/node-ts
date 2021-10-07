import express,{Application,Request,Response,NextFunction} from 'express';

const app:Application=express();
const port:number = 5000;

app.get('/',(req:Request, res:Response, next:NextFunction)=>{
    res.send('hello');
});

app.listen(port,()=>console.log('Server running at port '+port));