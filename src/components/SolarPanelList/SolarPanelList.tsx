import { FC } from 'react';
import { IProps } from './SolarPanelList.types';
import { Link } from 'react-router-dom';
import { PagePaths } from '@/constants';

const SolarPanelList: FC<IProps> = ({ entries }) => (
  <ul>
    {entries.map((entry, index) => (
      <li key={index}>
        <Link to={`${PagePaths.panelsPath}/${entry.featureId}`}>
          {entry.featureId}
        </Link>
      </li>
    ))}
  </ul>
);

export default SolarPanelList;
