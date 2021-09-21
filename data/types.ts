type PlantDirColumn = { Header: string; accessor: string };
type PlantDirData = { [key: string]: string | number };

type PlantDirectoryTable = {
  columns: PlantDirColumn[];
  data: PlantDirData[];
};

enum TableColumnKeys {
  name = 'col0',
  cultivarName = 'col1',
  height = 'col2',
  spread = 'col3',
  numberPerSqMeter = 'col4',
  architecture = 'col5',
  flowerSeason = 'col6',
  structuralInterest = 'col7',
  longevity = 'col8',
  spreadAbility = 'col9',
  persistence = 'col10',
  selfSeeding = 'col11',
  habitatLight = 'col12',
  habitatSoil = 'col13',
  zone = 'col14',
  notes = 'col15',
}

export type { PlantDirectoryTable, PlantDirColumn, PlantDirData };

export { TableColumnKeys };
