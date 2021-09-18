import { SearchInput } from '../SearchInput';

export default function Filters({ setGlobalFilter, globalFilter }) {
  return (
    <>
      <SearchInput
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
      />
    </>
  );
}
