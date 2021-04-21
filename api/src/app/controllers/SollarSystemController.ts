import { Request, Response } from "express";
import { con } from "../../config/database";

interface ISollarSystem {
  name: string;
  location: string;
  direction: string;
  star: string;
  radius: number;
}

interface IParams{
  name?: string;
}

export default class SollarSystemController {
  async register(req: Request, res: Response) {
    const { name, direction, location, radius, star }: ISollarSystem = req.body;
    con.query(
      `INSERT INTO sollar_systems (name, direction, location, radius, star) VALUES ('${name}', '${direction}', '${location}, '${radius}', '${star}'')`, 
      (err, rows) => {
      if (err) throw err
      return res.status(200).json(`Sollar System ${name} created with success!`)
    })
  }

  async search(req: Request, res: Response) {
    const { name }: IParams = req.params;
    con.query(
      `SELECT * FROM sollar_systems WHERE name = '${name}'`, 
      (err, rows) => {
      if (err) {
        return res.status(404).json("Sollar System not found.");
      }
      return res.status(200).json(rows[0])
    })
  }

  async searchAll(req: Request, res: Response) {
    con.query(
      `SELECT * FROM sollar_systems`, 
      (err, rows) => {
      if (err) {
        return res.status(404).json("Sollar Systems not found.");
      }
      return res.status(200).json(rows)
    })
  }

  async update(req: Request, res: Response) {
    const { name }: IParams = req.params;
    const params: ISollarSystem = req.body;
    con.query(
      `UPDATE sollar_systems 
      SET 
        ${params.name ? `name = '${params.name}'`: ``}
        ${params.direction ? `, direction = '${params.direction}'`: ``}
        ${params.location ? `, location = '${params.location}'`: ``}
        ${params.radius ? `, radius = '${params.radius}'`: ``}
        ${params.star ? `, star = '${params.star}'`: ``}
      WHERE name = '${name}'`,
      (err, rows) => {
      if (err) {
        return res.status(500).json(`Error, try again!`)
      }
      return res.status(200).json(rows)
    })
  }

  async delete(req: Request, res: Response) {
    const { name }: IParams = req.params;
    con.query(
      `DELETE FROM sollar_systems WHERE name = '${ name }'`,
      (err, rows) => {
        if (err || rows.changedRows === 0) {
          return res.status(500).json(`Error, try again!`)
        }
        return res.status(200).json(`Success!`)
      })
  }
}