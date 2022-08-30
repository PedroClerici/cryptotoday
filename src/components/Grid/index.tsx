import React from 'react';
import styles from './grid.module.scss';

interface Props {
  className?: string,
  children: React.ReactNode,
}

const Grid: React.FC<Props> = (props) => (
  <div className={[styles.grid, props.className].join(' ')}>
    {props.children}
  </div>
);

export default Grid;
