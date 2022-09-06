import React from 'react';
import './styles.scss';

interface Props {
  children: React.ReactNode,
}

const Grid: React.FC<Props> = ({ children }: Props) => (
  <div className="grid">
    {children}
  </div>
);

export default Grid;
