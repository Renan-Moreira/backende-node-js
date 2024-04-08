import { verify } from "jsonwebtoken";


const login = (req:any, res:any, next:any) => {
    try{
        const decode = verify(req.headers.authorization, process.env.SECRET as string)
        req.user = decode
        next();
    }catch(error){
        return res.status(400).json({message: 'não esta logado', error: error})
    }
}

export { login };