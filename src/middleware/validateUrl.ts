import urlExist from "url-exist";
// import {urlExists} from 'url-exists-deep';
import express, {Request,Response,NextFunction} from 'express';

const validateUrl = async(req:Request,res:Response,next:NextFunction)=>{
    const {link} = req.body;
    console.log(link)
    const isExist = await urlExist(link)
    if (!isExist){
        return res.json({message:"Invalid URL",status:"400"})
    }
    next()

}
export default validateUrl