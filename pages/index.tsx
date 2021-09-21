import { GetStaticProps } from 'next';
import prisma from 'utilities/prisma';
import { TableColumnKeys } from 'data/types';
import { Header, PlantDirectory } from 'components';

export const getStaticProps: GetStaticProps = async () => {
  const plants = await prisma.plant.findMany();

  const tablePlants = plants.map((plant) =>
    Object.entries(plant).reduce((acc, [key, value]) => {
      if (key === 'id') {
        return { ...acc, [key]: value };
      }

      return { ...acc, [TableColumnKeys[key]]: value };
    }, {})
  );

  return { props: { plants: tablePlants } };
};

function Home({ plants }) {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="sm:max-w-7xl sm:mx-auto sm:my-8 sm:pl-0 px-4 sm:px-6">
        <PlantDirectory plants={plants} />
      </div>
    </div>
  );
}

export default Home;
