import React, { useContext } from 'react';
import { UserContext } from '../../../context/userContext';
import './styles.scss';

const PrevTimeSelector = () => {
  const { prevDays, setPrevDays } = useContext(UserContext);
  const prevDaysItems = [
    { description: '24h', value: 1 },
    { description: '7d', value: 7 },
    { description: '14d', value: 14 },
    { description: '30d', value: 30 },
    { description: '90d', value: 90 },
    { description: '1y', value: 365 },
  ];

  return (
    <ul className="prev-time-selector">
      {prevDaysItems.map((item) => (
        <li
          className="prev-time-selector__value"
          role="option"
          aria-selected="true"
          aria-hidden="true"
          tabIndex={0}
          onClick={() => setPrevDays(item.value)}
          style={prevDays === item.value ? { color: 'var(--blue-color)' } : {}}
        >
          {item.description}
        </li>
      ))}
    </ul>
  );
};

export default PrevTimeSelector;
