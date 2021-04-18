import 'dotenv/config';

/** Multer */
import * as multer from 'multer';
import multerConfig from './config/multer';

// CONTROLLERS
import { Router } from 'express';
import UserController from "./app/controllers/UserController";

/** Multer Init */
const upload = multer.default(multerConfig);

export class Routes {
  public userController: UserController = new UserController();

  public routes(app: Router): void {
    // USER
    app.post("/register-user", this.userController.register);
    app.post("/login", this.userController.login);
    }
}