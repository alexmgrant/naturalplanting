import { Prisma } from '@prisma/client';
import { Row } from 'react-table';

const plantsWithWiki = Prisma.validator<Prisma.PlantArgs>()({
  include: { wiki: true },
});

type PlantWithWiki = Prisma.PlantGetPayload<typeof plantsWithWiki>;
type Wiki = PlantWithWiki['wiki'];

interface PlantTableRow extends Row {
  original: { wiki: Wiki };
}

function getWiki(row: PlantTableRow) {
  return row.original?.wiki;
}

export { getWiki };
