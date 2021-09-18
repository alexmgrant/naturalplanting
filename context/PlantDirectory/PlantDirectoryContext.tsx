import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import { PlantDirectoryTable } from 'data/types';
import { columns, data } from 'data';

type PlantDirectoryContext = {
  plantDirectoryData: PlantDirectoryTable | null;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const PlantDirectoryContext = createContext<PlantDirectoryContext>(
  {} as PlantDirectoryContext
);

function PlantDirectoryProvider({ children }: { children: any }) {
  const [search, setSearch] = useState('');

  const plantDirectoryData: PlantDirectoryTable = useMemo(
    () => ({
      columns,
      data,
    }),
    []
  );

  const value = {
    search,
    setSearch,
    plantDirectoryData,
  };

  return (
    <PlantDirectoryContext.Provider value={value}>
      {children}
    </PlantDirectoryContext.Provider>
  );
}

function usePlantDirectoryContext() {
  const context = useContext(PlantDirectoryContext);
  if (context === undefined) {
    throw new Error(
      'usePlantDirectoryContext must be used within a PlantDirectoryProvider'
    );
  }

  return context;
}

export { PlantDirectoryProvider, usePlantDirectoryContext };
