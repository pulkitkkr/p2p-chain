import React from 'react';
import cn from 'classnames';
import './Container.scss';

const Container = ({
  className,
  style,
  children,
  ...otherProps
}) => (
  <div className={cn("Container", className)} style={style} {...otherProps}>
    {children}
  </div>
);

export default Container;
