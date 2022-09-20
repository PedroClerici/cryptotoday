import React from 'react';
import './styles.scss';

interface GridProps {
  children: React.ReactNode,
}

const Grid = ({ children }: GridProps) => (
  <div className="grid">
    {children}
  </div>
);

export default Grid;
