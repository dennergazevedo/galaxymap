import { Request, Response } from "express";
import { con } from "../../config/database";

interface ITravel {
  id: number;
  cost: number;
  distance: number;
  user_mail: string;
  rockets_name: string;
  start_planet: string;
  destiny_planet: string;
  date_start: string;
  date_arrival: string;
}

interface IParams{
  id?: number;
  email?: string;
}

export default class TravelController {
  async register(req: Request, res: Response) {
    const { cost, destiny_planet, distance, rockets_name, start_planet, user_mail, date_start, date_arrival }: ITravel = req.body;
    con.query(
      `INSERT INTO travel (cost, destiny_planet, distance, rockets_name, start_planet, user_mail, date_start, date_arrival) VALUES ('${cost}', '${destiny_planet}', '${distance}', '${rockets_name}', '${start_planet}', '${user_mail}', '${date_start}', '${date_arrival}')`, 
      (err, rows) => {
      if (err) throw err
      return res.status(200).json(`Travel created with success!`)
    })
  }

  async search(req: Request, res: Response) {
    const { id }: IParams = req.params;
    con.query(
      `SELECT * FROM travel WHERE id = '${id}'`, 
      (err, rows) => {
      if (err) {
        return res.status(404).json("Travel not found.");
      }
      return res.status(200).json(rows[0])
    })
  }

  async searchAll(req: Request, res: Response) {
    const { email }: IParams = req.params;
    con.query(
      `SELECT * FROM travel WHERE user_mail = '${email}'`, 
      (err, rows) => {
      if (err) {
        return res.status(404).json("Travels not found.");
      }
      return res.status(200).json(rows)
    })
  }

  async update(req: Request, res: Response) {
    const { id }: IParams = req.params;
    const params: ITravel = req.body;
    con.query(
      `UPDATE travel 
      SET 
        ${params.cost ? `cost = '${params.cost}'`: ``}
        ${params.destiny_planet ? `, destiny_planet = '${params.destiny_planet}'`: ``}
        ${params.distance ? `, distance = '${params.distance}'`: ``}
        ${params.rockets_name ? `, rockets_name = '${params.rockets_name}'`: ``}
        ${params.start_planet ? `, start_planet = '${params.start_planet}'`: ``}
        ${params.user_mail ? `, user_mail = '${params.user_mail}'`: ``}
      WHERE id = '${id}'`,
      (err, rows) => {
      if (err) {
        return res.status(500).json(`Error, try again!`)
      }
      return res.status(200).json(rows)
    })
  }

  async delete(req: Request, res: Response) {
    const { id }: IParams = req.params;
    con.query(
      `DELETE FROM travel WHERE id = '${ id }'`,
      (err, rows) => {
        if (err || rows.changedRows === 0) {
          return res.status(500).json(`Error, try again!`)
        }
        return res.status(200).json(`Success!`)
      })
  }
}