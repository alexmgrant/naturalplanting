// utils for generating data. Not consumed in app, usually used in quokka.

function generateColumnsMap(labels) {
  return labels.map((label, index) => {
    const accessor = `col${index}`;

    return { Header: label, accessor: accessor };
  });
}

function generateDataCollection(data: [string[]]) {
  return data.map((row) => {
    return row.reduce((acc, col, index) => {
      return { [`col${index}`]: col, ...acc };
    }, {});
  });
}

export { generateColumnsMap, generateDataCollection };
