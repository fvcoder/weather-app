/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { db } from 'server/lib/db';

export async function currentState(
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> {
  if (req.query['query'] && typeof req.query['query'] === 'string') {
    const query = req.query['query'];

    const result = await db.city.findUnique({
      select: {
        id: true,
        country: true,
        name: true,
        coord: true,
      },
      where: {
        id: Number(query),
      },
    });

    if (!result) {
      return res.status(404).json({ status: false });
    }
    const cord = JSON.parse(result.coord);

    const q = await fetch(
      `https://api.weatherapi.com/v1/current.json?q=${cord.lat},${cord.lon}&lang=es&key=${
        process.env['API_KEY'] as string
      }`
    ).then((s) => s.json());

    return res.json({
      status: true,
      query,
      ...q,
    });
  }

  return res.status(403).json({ status: false });
}
