import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import useGetPlantDir, {
  GSPlantDirectory,
} from '../../hooks/useGetPlantDirectory';
import { filterTable } from './utilities';

type PlantDirectoryContext = {
  plantTable: GSPlantDirectory | null;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const PlantDirectoryContext = createContext<PlantDirectoryContext>(
  {} as PlantDirectoryContext
);

function PlantDirectoryProvider({ children }: { children: any }) {
  let [plantTable] = useGetPlantDir();
  const [search, setSearch] = useState('');

  const filterPlantTable = filterTable(plantTable);

  if (search.length) {
    plantTable = filterPlantTable(search);
  }

  const value = { search, setSearch, plantTable };

  return (
    <PlantDirectoryContext.Provider value={value}>
      {children}
    </PlantDirectoryContext.Provider>
  );
}

function usePlantDirectory() {
  const context = useContext(PlantDirectoryContext);
  if (context === undefined) {
    throw new Error(
      'usePlantDirectory must be used within a PlantDirectoryProvider'
    );
  }

  return context;
}

export { PlantDirectoryProvider, usePlantDirectory };
