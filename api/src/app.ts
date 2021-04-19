import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes";
import cors from 'cors';
import { con } from "./config/database";
import { user, planets, rocket, sollar_systems, travel } from "./config/createDatabase";
import { populatePlanets, populateRocket, populateSollar_systems, populateUser } from './config/populateDatabase';

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    con.connect((err) => {
      if (err) {
          console.log('Erro connecting to database...', err)
          return
      }
      console.log('Connection established!')
    })
    // CREATE TABLES
    con.query(user, (err, rows) => {
      if (err) throw err
      console.log('USER TABLE CREATED!')
    })
    con.query(rocket, (err, rows) => {
      if (err) throw err
      console.log('ROCKET TABLE CREATED')
    })
    con.query(sollar_systems, (err, rows) => {
      if (err) throw err
      console.log('SOLLARSYSTEMS TABLE CREATED')
    })
    con.query(planets, (err, rows) => {
      if (err) throw err
      console.log('PLANETS TABLE CREATED')
    })
    con.query(travel, (err, rows) => {
      if (err) throw err
      console.log('TRAVEL TABLE CREATED')
    })

    // POPULATE QUERYS
    // con.query(populateUser, (err, rows) => {
    //   if (err) throw err
    //   console.log('USER POPULATED')
    // })
    // con.query(populateSollar_systems, (err, rows) => {
    //   if (err) throw err
    //   console.log('SOLLAR SYSTEMS POPULATED')
    // })
    // con.query(populatePlanets, (err, rows) => {
    //   if (err) throw err
    //   console.log('PLANETS POPULATED')
    // })
    // con.query(populateRocket, (err, rows) => {
    //   if (err) throw err
    //   console.log('ROCKET POPULATED')
    // })
  }
}

export default new App().app;
