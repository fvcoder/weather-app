/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

function isJsonString(str: string): boolean {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
}

export async function searchCountry(
  req: Request,
  res: Response
): Promise<Response<any, Record<string, any>>> {
  if (req.query['query'] && typeof req.query['query'] === 'string') {
    const query = req.query['query'];

    const db = new PrismaClient();
    const result = await db.city.findMany({
      select: {
        id: true,
        coord: true,
        country: true,
        geoname: true,
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
      result: result.map((x) => ({
        ...x,
        coord: isJsonString(x.coord) ? JSON.parse(x.coord) : x.coord,
        geoname: isJsonString(x.geoname) ? JSON.parse(x.geoname) : x.geoname,
      })),
    });
  }

  return res.status(403).json({ status: false });
}
