import { Request, Response } from "express";
import { con } from "../../config/database";

interface IRocket {
  name: string;
  speed: number;
  cost: number;
  image: string;
  capacity: number;
}

interface IParams{
  name?: string;
}

export default class RocketController {
  async register(req: Request, res: Response) {
    const { name, image, capacity, cost, speed }: IRocket = req.body;
    con.query(
      `INSERT INTO rockets (name, speed, cost, image, capacity) VALUES ('${name}', '${speed}', '${cost}, '${image}', '${capacity}'')`, 
      (err, rows) => {
      if (err) throw err
      return res.status(200).json(`Rocket ${name} created with success!`)
    })
  }

  async search(req: Request, res: Response) {
    const { name }: IParams = req.params;
    con.query(
      `SELECT * FROM rockets WHERE name = '${name}'`, 
      (err, rows) => {
      if (err) {
        return res.status(404).json("Rocket not found.");
      }
      return res.status(200).json(rows[0])
    })
  }

  async searchAll(req: Request, res: Response) {
    con.query(
      `SELECT * FROM rockets`, 
      (err, rows) => {
      if (err) {
        return res.status(404).json("Rockets not found.");
      }
      return res.status(200).json(rows)
    })
  }

  async update(req: Request, res: Response) {
    const { name }: IParams = req.params;
    const params: IRocket = req.body;
    con.query(
      `UPDATE rockets 
      SET 
        ${params.name ? `name = '${params.name}'`: ``}
        ${params.image ? `, image = '${params.image}'`: ``}
        ${params.capacity ? `, capacity = '${params.capacity}'`: ``}
        ${params.cost ? `, cost = '${params.cost}'`: ``}
        ${params.speed ? `, speed = '${params.speed}'`: ``}
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
      `DELETE FROM rockets WHERE name = '${ name }'`,
      (err, rows) => {
        if (err || rows.changedRows === 0) {
          return res.status(500).json(`Error, try again!`)
        }
        return res.status(200).json(`Success!`)
      })
  }
}