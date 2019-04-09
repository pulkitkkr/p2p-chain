import React from 'react';
import cn from 'classnames';

import './Col.scss';

const Col = ({
  lg,
  md,
  sm,
  hiddenSm,
  hiddenMd,
  hiddenLg,
  hiddenXlg,
  children,
  className,
  ...props
}) => (
  <div
    className={cn("Col", className, {
      [`Col--lg-${lg}`]: !!lg,
      [`Col--md-${md}`]: !!md,
      [`Col--sm-${sm}`]: !!sm,
      [`Col--sm-hidden-${hiddenSm}`]: !!hiddenSm,
      [`Col--md-hidden-${hiddenMd}`]: !!hiddenMd,
      [`Col--lg-hidden-${hiddenLg}`]: !!hiddenLg,
      [`Col--xlg-hidden-${hiddenXlg}`]: !!hiddenXlg,
    })}
    {...props}
  >
    {children}
  </div>
);

export default Col;
