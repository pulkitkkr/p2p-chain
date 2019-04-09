import React from 'react';
import cn from 'classnames';

import './Row.scss';

const Row = ({
  children,
  className,
  ...otherProps
}) => (
  <div className={cn("Row", className)} {...otherProps}>
    {children}
  </div>
);

export default Row;
