import 'dotenv/config';

/** Multer */
import * as multer from 'multer';
import multerConfig from './config/multer';

// CONTROLLERS
import { Router } from 'express';
import UserController from "./app/controllers/UserController";
import RocketController from "./app/controllers/RocketController";
import SollarSystemController from './app/controllers/SollarSystemController';
import PlanetController from './app/controllers/PlanetController';
import TravelController from './app/controllers/TravelController';

/** Multer Init */
const upload = multer.default(multerConfig);

export class Routes {
  public userController: UserController = new UserController();
  public rocketController: RocketController = new RocketController();
  public sollarSystemController: SollarSystemController = new SollarSystemController();
  public planetController: PlanetController = new PlanetController();
  public travelController: TravelController = new TravelController();

  public routes(app: Router): void {
    // USER
    app.post("/register-user", this.userController.register);
    app.post("/login", this.userController.login);
    app.put("/update-user/:email", this.userController.update);
    app.delete("/delete-user/:email", this.userController.delete);

    // ROCKET
    app.post("/register-rocket", this.rocketController.register);
    app.get("/search-all-rockets", this.rocketController.searchAll);
    app.get("/search-rocket/:name", this.rocketController.search);
    app.put("/update-rocket/:name", this.rocketController.update);
    app.delete("/delete-rocket/:name", this.rocketController.delete);

    // SOLLAR_SYSTEMS
    app.post("/register-sollar-system", this.sollarSystemController.register);
    app.get("/search-all-sollar-systems", this.sollarSystemController.searchAll);
    app.get("/search-sollar-system/:name", this.sollarSystemController.search);
    app.put("/update-sollar-system/:name", this.sollarSystemController.update);
    app.delete("/delete-sollar-system/:name", this.sollarSystemController.delete);

    // PLANETS
    app.post("/register-planets", this.planetController.register);
    app.get("/search-all-planets", this.planetController.searchAll);
    app.get("/search-planets/:name", this.planetController.search);
    app.put("/update-planets/:name", this.planetController.update);
    app.delete("/delete-planets/:name", this.planetController.delete);

    // TRAVEL
    app.post("/register-travel", this.travelController.register);
    app.get("/search-all-travel/:email", this.travelController.searchAll);
    app.get("/search-travel/:id", this.travelController.search);
    app.put("/update-travel/:id", this.travelController.update);
    app.delete("/delete-travel/:id", this.travelController.delete);

    }
}