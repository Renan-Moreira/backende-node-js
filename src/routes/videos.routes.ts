import { Router } from "express";
import { VideosRepository } from "../modules/videos/repositories/VideosRepositories";
import { login } from "../middleware/login";



const videosRoutes = Router()
const videosRepository = new VideosRepository()

videosRoutes.post('/create-video', login, (request, response) => {
    videosRepository.create(request, response)
})

videosRoutes.get('/get-video', (request, response) => {
    videosRepository.getvideos(request, response)
})

videosRoutes.get('/search-video', (request, response) => {
    videosRepository.searchvideo(request, response)
})

export { videosRoutes };