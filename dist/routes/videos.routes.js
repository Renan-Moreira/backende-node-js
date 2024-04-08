"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRoutes = void 0;
const express_1 = require("express");
const VideosRepositories_1 = require("../modules/videos/repositories/VideosRepositories");
const login_1 = require("../middleware/login");
const videosRoutes = (0, express_1.Router)();
exports.videosRoutes = videosRoutes;
const videosRepository = new VideosRepositories_1.VideosRepository();
videosRoutes.post('/create-video', login_1.login, (request, response) => {
    videosRepository.create(request, response);
});
videosRoutes.get('/get-video', (request, response) => {
    videosRepository.getvideos(request, response);
});
videosRoutes.get('/search-video', (request, response) => {
    videosRepository.searchvideo(request, response);
});
