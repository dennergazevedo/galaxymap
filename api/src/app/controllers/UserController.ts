import { Request, Response } from "express";
import { con } from "../../config/database";

interface IUser {
  name: string;
  email: string;
}

export default class UserController {
  async register(req: Request, res: Response) {
    const {email, name}: IUser = req.body;
    con.query(
      `INSERT INTO users (email, name) VALUES ('${email}', '${name}')`, 
      (err, rows) => {
      if (err) throw err
      return res.status(200).json(`User ${name} created with success!`)
    })
  }

  async login(req: Request, res: Response) {
    const {email, name}: IUser = req.body;
    con.query(
      `SELECT * FROM users WHERE name = '${name}' AND email = '${email}'`, 
      (err, rows) => {
      if (err) {
        return res.status(404).json("Usuário não encontrado!");
      }
      return res.status(200).json(rows)
    })
  }

  async update(req: Request, res: Response) {
    const {email, name}: IUser = req.body;
    con.query(
      `SELECT * FROM users WHERE name = '${name}' AND email = '${email}'`, 
      (err, rows) => {
      if (err) {
        return res.status(404).json("Usuário não encontrado!");
      }
      return res.status(200).json(rows)
    })
  }
}