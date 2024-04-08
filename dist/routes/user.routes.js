"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const UserRepositorie_1 = require("../modules/user/repositories/UserRepositorie");
const userRoutes = (0, express_1.Router)(); //segregação
exports.userRoutes = userRoutes;
const useRepository = new UserRepositorie_1.UserRepository();
userRoutes.post('/sign-up', (request, response) => {
    useRepository.create(request, response);
});
userRoutes.post('/sign-in', (request, response) => {
    useRepository.login(request, response);
});
