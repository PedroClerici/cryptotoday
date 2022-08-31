import React from 'react';
import './Grid.scss';

interface Props {
  children: React.ReactNode,
}

const Grid: React.FC<Props> = (props) => (
  <div className="grid">
    {props.children}
  </div>
);

export default Grid;
