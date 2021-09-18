type PlantDirColumn = { Header: string; accessor: string };
type PlantDirData = { [key: string]: string | number };

type PlantDirectoryTable = {
  columns: PlantDirColumn[];
  data: PlantDirData[];
};

export type { PlantDirectoryTable, PlantDirColumn, PlantDirData };
