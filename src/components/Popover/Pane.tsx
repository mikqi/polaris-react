import * as React from 'react';
import {classNames} from '@shopify/react-utilities/styles';

import Scrollable from '../Scrollable';

import * as styles from './Popover.scss';

export interface Props {
  fixed?: boolean,
  children?: React.ReactNode,
}

export default function Pane({fixed, children}: Props) {
  const className = classNames(
    styles.Pane,
    fixed && styles.fixed,
  );

  return (
    <Scrollable shadow className={className}>
      {children}
    </Scrollable>
  );
}