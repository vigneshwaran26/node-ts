import { Console } from 'console';
import express, {NextFunction, Request,Response} from 'express';
const router = express.Router();

router.get('/', (request:Request,response:Response,next:NextFunction) => {


    try{
        const rates:any =  [
            {
                "base":"INR",  
                "rate": {
                    "CAD": 0.017,
                    "EUR": 0.012,
                    "GBP": 0.0098,
                    "INR": 1,
                    "USD": 0.0130
                } ,
                "symbols": {
                    "":""
                }
              },
              {
                  "base":"USD",  
                  "rate": {
                      "CAD": 1.26,
                      "EUR": 0.87,
                      "GBP": 0.74,
                      "INR": 75.07,
                      "USD": 1
                      } 
              },
              {
                  "base":"GBP",  
                  "rate": {
                      "CAD": 1.71,
                      "EUR": 1.18,
                      "GBP": 1,
                      "INR": 102.10,
                      "USD": 1.36
                  } 
              },
              {
                  "base":"CAD",  
                  "rate": {
                      "CAD":1,
                      "EUR": 0.69,
                      "GBP": 0.59,
                      "INR": 59.75,
                      "USD": 0.80,
                  } 
              },
              {
                  "base":"EUR",  
                  "rate": {
                      "CAD": 1.45,
                      "EUR": 1,
                      "GBP": 0.85,
                      "INR": 86.61,
                      "USD": 1.15,
                  } 
              }
        ]
        let rate:any = rates;
        if(request.query.base && request.query.symbols){
            rate = rates.find((ele:any)=> ele.base===request.query.base && ele.symbols===request.query.symbols)
            
        } else if(Object(request.query).hasOwnProperty("base") || Object(request.query).hasOwnProperty("symbols")){
            console.log("else if called ::", request.query);
            rate= rate.find((ele:any)=> ele[Object.keys(request.query)[0]]===request.query[Object.keys(request.query)[0]])
        }

        return response.status(200).send(
            rate        
        )
    }catch(error){
      return response.status(500).send(`Somthing went wrong...`);
    //  next(error)
    }
   
})


module.exports = router;