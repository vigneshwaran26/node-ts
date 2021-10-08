import express, {NextFunction, Request,Response} from 'express';
const router = express.Router();

router.get('/', (request:Request,response:Response,next:NextFunction) => {

    try{
        return response.status(200).send(
            [
                {
                  "base":"INR",  
                  "rate": {
                      "USD": 0.0130,
                      "GBP": 0.0098,
                      "CAD": 0.017,
                      "EUR": 0.012,
                  } 
                }
            ]
        )
    }catch(error){
      return response.status(500).send(`Somthing went wrong...`);
    //  next(error)
    }
   
})


module.exports = router;