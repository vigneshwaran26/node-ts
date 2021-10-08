import express,{Application,Request,Response,NextFunction, Router} from 'express';
import cors, { CorsOptions } from 'cors';
require('dotenv').config();


const app:Application=express();
const port = process.env.PORT||5000;

var whitelist = ['http://localhost:3000']
var corsOptions:CorsOptions = {
  origin: function (origin:any, callback:any) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.set('view engine', 'ejs');
app.use(cors(corsOptions))
app.use('/api/rates',require('./api/currency'))

app.use('/**', (req,res)=>{
    res.status(404).send("Api your searching for is not avail...")
})

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
});