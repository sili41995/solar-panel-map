import { FC } from 'react';
import { IProps } from './SolarPanelList.types';
import { Link } from 'react-router-dom';

const SolarPanelList: FC<IProps> = ({ entries }) => (
  <ul>
    {entries.map((entry, index) => (
      <li key={index}>
        <Link to={`/${entry.featureId}`}>{entry.featureId}</Link>
      </li>
    ))}
  </ul>
);

export default SolarPanelList;
