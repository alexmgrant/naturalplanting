import { GetStaticProps } from 'next';
import prisma from 'utilities/prisma';
import { TableColumnKeys } from 'data/types';
import { Header, PlantDirectory } from 'components';

const skipTableKeys = ['id', 'wiki'];

export const getStaticProps: GetStaticProps = async () => {
  const plants = await prisma.plant.findMany({ include: { wiki: true } });

  const tablePlants = plants.map((plant) =>
    Object.entries(plant).reduce((acc, [key, value]) => {
      if (skipTableKeys.some((skipKey) => skipKey === key)) {
        return { ...acc, [key]: value };
      }

      return { ...acc, [TableColumnKeys[key]]: value };
    }, {})
  );

  return { props: { plants: tablePlants } };
};

// async function wiki() {
//   const params = new URLSearchParams({
//     titles: 'Acaena|Acanthus_spinosus',
//     origin: '*',
//     action: 'query',
//     format: 'json',
//     prop: 'pageimages|info',
//     piprop: 'thumbnail|original',
//     inprop: 'url',
//     pithumbsize: '100',
//   });

//   const req = await fetch(`https://en.wikipedia.org/w/api.php?${params}`);
//   const json = await req.json();

//   return json;
// }

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
