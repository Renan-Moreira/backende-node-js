import { Request, Response } from "express";
import { pool } from "../../../mysql";
import { v4 as uuidv4 } from 'uuid';


class VideosRepository{
    create(request:Request, response:Response){
        const {user_id, title, description} = request.body;
        pool.getConnection((err:any, connection:any) => {
            connection.query(
                'INSERT INTO videos (user_id, title, description, video_id) VALUES (?,?,?,?)',
                [user_id, title, description, uuidv4()],
                (error:any, results:any, fileds:any) => {
                    connection.release()
                    if(error){
                        return response.status(400).json({error: `${'erro ao criar video'} ${error}`})
                    }
                    response.status(200).json({results: 'video criado com sucesso'})
                }
            )
        })
    }

    getvideos(request:Request, response:Response){
        const {user_id} = request.body;
        pool.getConnection((err:any, connection:any) => {
            connection.query(
                'SELECT * FROM videos WHERE user_id = ?',
                [user_id],
                (error:any, results:any, fileds:any) => {
                    connection.release()
                    if(error){
                        return response.status(400).json({message: 'erro ao buscar videos', error: error})
                    }
                    response.status(200).json({message: 'video encontrado com sucesso', results: results})
                }
            )
        })
    }

    searchvideo(request:Request, response:Response){
        const {search} = request.query;
        pool.getConnection((err:any, connection:any) => {
            connection.query(
                'SELECT * FROM videos WHERE title LIKE ?',
                [`%${search}%`],
                (error:any, results:any, fileds:any) => {
                    connection.release()
                    if(error){
                        return response.status(400).json({message: 'erro ao buscar videos', error: error})
                    }

                    response.status(200).json({message: 'videos encontrados com sucesso', results: results})
                }
            )
        })
    }
}

export { VideosRepository };