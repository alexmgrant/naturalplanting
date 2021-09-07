import { useEffect, useState } from 'react';

import { GSPlantDirectory } from './types';

const SPREAD_SHEET_ID = '1r42tvZjn_8-Yo_ekD7unxCWMSQjIPp6uQZsjJ8ZuZYQ';

export default function useGetPlantDirectory() {
  const [plantTable, setPlantTable] = useState<GSPlantDirectory>();

  useEffect(() => {
    fetch(
      `https://docs.google.com/spreadsheets/d/${SPREAD_SHEET_ID}/gviz/tq?tqx=out:json`
    )
      .then((res) => res.text())
      .then((text) => {
        setPlantTable(JSON.parse(text.substr(47).slice(0, -2)));
      });
  }, []);

  return [plantTable];
}
