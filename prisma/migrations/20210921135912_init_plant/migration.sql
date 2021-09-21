-- CreateTable
CREATE TABLE "Plant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cultivarName" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "spread" TEXT NOT NULL,
    "numberPerSqMeter" INTEGER NOT NULL,
    "architecture" TEXT NOT NULL,
    "flowerSeason" TEXT NOT NULL,
    "structuralInterest" TEXT NOT NULL,
    "longevity" TEXT NOT NULL,
    "spreadAbility" TEXT NOT NULL,
    "persistence" TEXT NOT NULL,
    "selfSeeding" TEXT NOT NULL,
    "habitatLight" TEXT NOT NULL,
    "habitatSoil" TEXT NOT NULL,
    "zone" TEXT NOT NULL,
    "notes" TEXT NOT NULL
);
