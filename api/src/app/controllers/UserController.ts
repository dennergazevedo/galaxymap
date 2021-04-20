import { Request, Response } from "express";
import { con } from "../../config/database";
import bcrypt from 'bcryptjs';

interface IUser {
  name: string;
  email: string;
  password: string;
}

interface IParams{
  email?: string;
}

export default class UserController {
  async register(req: Request, res: Response) {
    const { email, name, password }: IUser = req.body;
    const hash = await bcrypt.hash(password, 10);
    con.query(
      `INSERT INTO users (email, name, password) VALUES ('${email}', '${name}', '${hash}')`, 
      (err, rows) => {
      if (err) throw err
      return res.status(200).json(`User ${name} created with success!`)
    })
  }

  async login(req: Request, res: Response) {
    const {email, password}: IUser = req.body;
    con.query(
      `SELECT * FROM users WHERE email = '${email}'`, 
      async (err, rows) => {
      if (err || rows.length === 0) {
        return res.status(404).json("User not found.");
      }
      const response = await bcrypt.compare(password, rows[0].password);
      if(response){
        return res.status(200).json({name: rows[0].name, email: rows[0].email})
      }
      return res.status(401).json('Invalid credentials.')
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