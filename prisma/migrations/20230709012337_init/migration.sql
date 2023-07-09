-- CreateTable
CREATE TABLE "city" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "coord" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "geoname" TEXT NOT NULL,
    "langs" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
