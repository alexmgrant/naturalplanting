import { Header, PlantDirectory } from 'components';
import { PlantDirectoryProvider } from 'context/PlantDirectory';

function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="sm:max-w-7xl sm:mx-auto sm:my-8 sm:pl-0 px-4 sm:px-6">
        <PlantDirectoryProvider>
          <PlantDirectory />
        </PlantDirectoryProvider>
      </div>
    </div>
  );
}

export default Home;
