import { ChangeEvent } from 'react';
import { usePlantDirectory } from '../../context/PlantDirectory';

export default function SearchInput() {
  const { search = '', setSearch } = usePlantDirectory();

  const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };

  return (
    <div className="max-w-sm my-4">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700"
      >
        Search
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">🔎</span>
        </div>
        <input
          onChange={handleOnChange}
          value={search}
          type="text"
          name="search"
          id="search"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
          placeholder=""
        />
      </div>
    </div>
  );
}
