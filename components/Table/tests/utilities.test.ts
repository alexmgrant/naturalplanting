import { getWiki } from '../utilities';

const mockRow = {
  allCells: [{}, {}],
  cells: [{}, {}],
  depth: 0,
  getRowProps: jest.fn(),
  id: '0',
  index: 0,
  original: {
    id: 'cktu5hhkx0007rxp458pgb5yg',
    col0: 'Nepta sibrica',
    col1: 'Siberian catmint',
    col2: 'M',
    col3: '0.5-1.0',
    wiki: {
      id: 'cku1r0hre0036c6p47z6l8vjp',
      fullurl: 'https://en.wikipedia.org/wiki/Nepeta_sibirica',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/62/Nepeta_sibirica.jpg',
      thumbnail:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Nepeta_sibirica.jpg/66px-Nepeta_sibirica.jpg',
      plantId: 'cktu5hhkx0007rxp458pgb5yg',
    },
  },
  originalSubRows: [],
  subRows: [],
  values: { col0: 'Ne' },
};

describe('Table utilities', () => {
  test('getWiki returns wiki collection', () => {
    const {
      original: { wiki },
      ...rowWithNullWiki
    } = mockRow;

    expect(getWiki(mockRow as any)).toBe(wiki);
    expect(getWiki(rowWithNullWiki as any)).toBe(undefined);
  });
});
