import { Request, Response } from "express";
import { con } from "../../config/database";

interface IPlanet {
  name: string;
  size: number;
  mass: number;
  position: string;
  image: string;
  distance: number;
  sollar_systems: string;
}

interface IParams{
  name?: string;
}

export default class RocketController {
  async register(req: Request, res: Response) {
    const { name, image, distance, mass, position, size, sollar_systems}: IPlanet = req.body;
    con.query(
      `INSERT INTO planets (name, image, distance, mass, position, size, sollar_systems) VALUES ('${name}', '${image}', '${distance}', '${mass}', '${position}', '${size}', '${sollar_systems}')`, 
      (err, rows) => {
      if (err) throw err
      return res.status(200).json(`Planet ${name} created with success!`)
    })
  }

  async search(req: Request, res: Response) {
    const { name }: IParams = req.params;
    con.query(
      `SELECT * FROM planets WHERE name = '${name}'`, 
      (err, rows) => {
      if (err) {
        return res.status(404).json("Planet not found.");
      }
      return res.status(200).json(rows[0])
    })
  }

  async searchAll(req: Request, res: Response) {
    con.query(
      `SELECT * FROM planets`, 
      (err, rows) => {
      if (err) {
        return res.status(404).json("Planets not found.");
      }
      return res.status(200).json(rows)
    })
  }

  async update(req: Request, res: Response) {
    const { name }: IParams = req.params;
    const params: IPlanet = req.body;
    con.query(
      `UPDATE rockets 
      SET 
        ${params.name ? `name = '${params.name}'`: ``}
        ${params.image ? `, image = '${params.image}'`: ``}
        ${params.distance ? `, distance = '${params.distance}'`: ``}
        ${params.mass ? `, mass = '${params.mass}'`: ``}
        ${params.position ? `, position = '${params.position}'`: ``}
        ${params.size ? `, size = '${params.size}'`: ``}
        ${params.sollar_systems ? `, sollar_systems = '${params.sollar_systems}'`: ``}
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
      `DELETE FROM planets WHERE name = '${ name }'`,
      (err, rows) => {
        if (err || rows.changedRows === 0) {
          return res.status(500).json(`Error, try again!`)
        }
        return res.status(200).json(`Success!`)
      })
  }
}