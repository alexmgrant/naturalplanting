-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cultivarName" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "spread" TEXT NOT NULL,
    "numberPerSqMeter" TEXT NOT NULL,
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
INSERT INTO "new_Plant" ("architecture", "cultivarName", "flowerSeason", "habitatLight", "habitatSoil", "height", "id", "longevity", "name", "notes", "numberPerSqMeter", "persistence", "selfSeeding", "spread", "spreadAbility", "structuralInterest", "zone") SELECT "architecture", "cultivarName", "flowerSeason", "habitatLight", "habitatSoil", "height", "id", "longevity", "name", "notes", "numberPerSqMeter", "persistence", "selfSeeding", "spread", "spreadAbility", "structuralInterest", "zone" FROM "Plant";
DROP TABLE "Plant";
ALTER TABLE "new_Plant" RENAME TO "Plant";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
