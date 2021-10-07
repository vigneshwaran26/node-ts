import express,{Application,Request,Response,NextFunction} from 'express';
require('dotenv').config();
import { Currency } from './models/currency';


const app:Application=express();
const port = process.env.PORT||4000;


function getfunction(){
    let currency = new Currency();
    currency.Base = "USD";
}



app.get('/',(req:Request, res:Response, next:NextFunction)=>{
    res.send('hello');
});

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
});