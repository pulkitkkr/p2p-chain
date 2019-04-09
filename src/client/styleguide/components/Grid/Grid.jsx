import React from 'react';
import cn from 'classnames';

import Container from './Container/Container';
import Row from './Row/Row';
import Col from './Col/Col';
import './Grid.scss';

const Grid = (props) => (
  <div
    className={cn(
      "Grid",
      { [`Grid--noPadding`]: !!props.noPadding },
      { [`Grid--fullWidth`]: !!props.fullWidth },
      props.className,
    )}
  >
    {props.children}
  </div>
);

Grid.Container = Container;
Grid.Row = Row;
Grid.Col = Col;

export default Grid;
