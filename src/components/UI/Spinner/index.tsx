import React from 'react';

import './styles.scss';

interface SpinnerProps {
  className: string
}

const Spinner = ({ className }: SpinnerProps) => (
  <div className={`${className} spinner`}>
    <div className="spinner__icon" />
  </div>
);

export default Spinner;
