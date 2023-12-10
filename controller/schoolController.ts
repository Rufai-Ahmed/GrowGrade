import {Response, Request} from 'express'
import { HTTP } from '../BE/utils/enums'

export const createSchool = async(req:Request, res:Response) =>{
    try {
        const {email, password} = req.body
        return res.status(HTTP.CREATED).json({
            message:"This school has successfully been created."
        })
    } catch (error) {
        return res.status(HTTP.BAD).json({
            message:"Sorry!! User not created. There was an error with this request."
        })
    }
}