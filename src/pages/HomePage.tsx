import SolarPanelList from '@/components/SolarPanelList';
import solarPanelsEntriesServiceApi from '@/service/solarPanelsEntriesServiceApi';
import { SolarPanelEntries } from '@/types/types';
import { FC, useEffect, useState } from 'react';

const HomePage: FC = () => {
  const [entries, setEntries] = useState<SolarPanelEntries | null>(null);

  useEffect(() => {
    const getSolarPanelsEntries = async () => {
      const result = await solarPanelsEntriesServiceApi.getAllEntries();
      setEntries(result.results);
    };

    getSolarPanelsEntries();
  }, []);

  return entries && <SolarPanelList entries={entries} />;
};

export default HomePage;
