"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosRepository = void 0;
const mysql_1 = require("../../../mysql");
const uuid_1 = require("uuid");
class VideosRepository {
    create(request, response) {
        const { user_id, title, description } = request.body;
        mysql_1.pool.getConnection((err, connection) => {
            connection.query('INSERT INTO videos (user_id, title, description, video_id) VALUES (?,?,?,?)', [user_id, title, description, (0, uuid_1.v4)()], (error, results, fileds) => {
                connection.release();
                if (error) {
                    return response.status(400).json({ error: `${'erro ao criar video'} ${error}` });
                }
                response.status(200).json({ results: 'video criado com sucesso' });
            });
        });
    }
    getvideos(request, response) {
        const { user_id } = request.body;
        mysql_1.pool.getConnection((err, connection) => {
            connection.query('SELECT * FROM videos WHERE user_id = ?', [user_id], (error, results, fileds) => {
                connection.release();
                if (error) {
                    return response.status(400).json({ message: 'erro ao buscar videos', error: error });
                }
                response.status(200).json({ message: 'video encontrado com sucesso', results: results });
            });
        });
    }
    searchvideo(request, response) {
        const { search } = request.query;
        mysql_1.pool.getConnection((err, connection) => {
            connection.query('SELECT * FROM videos WHERE title LIKE ?', [`%${search}%`], (error, results, fileds) => {
                connection.release();
                if (error) {
                    return response.status(400).json({ message: 'erro ao buscar videos', error: error });
                }
                response.status(200).json({ message: 'videos encontrados com sucesso', results: results });
            });
        });
    }
}
exports.VideosRepository = VideosRepository;
