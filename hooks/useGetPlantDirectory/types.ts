type GSPlantDirCol = { id: string; label: string; type: string };
type GSPlantDirRow = { c: { v: string }[] };

type GSPlantDirectory = {
  table: {
    cols: GSPlantDirCol[];
    rows: GSPlantDirRow[];
  };
};

export type { GSPlantDirectory, GSPlantDirCol, GSPlantDirRow };
