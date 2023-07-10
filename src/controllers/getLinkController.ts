import express,{Request,Response} from 'express';
import prisma from '../DB/prisma';
import { StatusCodes } from 'http-status-codes';



const getLink = async (req:Request, res:Response):Promise<void> =>{
    const {id} = req.params;
    console.log(id)
    
    if (id) {
        try{
          const long_link = await prisma.url.findFirstOrThrow({
            where:{
                shorted_link:id,
            },
          })
          res
          .status(StatusCodes.OK)
          .redirect(long_link.link)
        }catch(error){
            res.sendFile(__dirname + "/404.html");
        }
    }
    else {
        res.sendFile(__dirname + "/404.html");
    }
}

export default getLink;