/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { db } from 'server/lib/db';

export async function searchCountry(
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> {
  if (req.query['query'] && typeof req.query['query'] === 'string') {
    const query = req.query['query'];

    const result = await db.city.findMany({
      select: {
        id: true,
        country: true,
        name: true,
      },
      where: {
        name: {
          startsWith: query,
        },
      },
      take: 10,
    });

    return res.json({
      status: true,
      query,
      result,
    });
  }

  return res.status(403).json({ status: false });
}
