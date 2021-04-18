import { Request, Response } from "express";
import { con } from "../../config/database";

interface IUser {
  name: string;
  email: string;
}

interface IParams{
  email?: string;
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
        return res.status(404).json("User not found.");
      }
      return res.status(200).json(rows)
    })
  }

  async update(req: Request, res: Response) {
    const { email }: IParams = req.params;
    const params: IUser = req.body;
    con.query(
      `UPDATE users 
      SET ${params.name ? `name = '${params.name}'`: ``}${params.email ? `, email = '${params.email}'`: ''}
      WHERE email = '${email}'`,
      (err, rows) => {
      if (err) {
        return res.status(500).json(`Error, try again!`)
      }
      return res.status(200).json(rows)
    })
  }

  async delete(req: Request, res: Response) {
    const { email }: IParams = req.params;
    con.query(
      `DELETE FROM users WHERE email = '${ email }'`,
      (err, rows) => {
        if (err || rows.changedRows === 0) {
          return res.status(500).json(`Error, try again!`)
        }
        return res.status(200).json(`Success!`)
      })
  }
}