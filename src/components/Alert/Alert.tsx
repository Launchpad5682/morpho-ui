import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { VscClose } from 'react-icons/vsc';
import { Typography } from '../..';
import './Alert.css';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  color?: 'red' | 'green' | 'yellow' | 'blue' | 'pink';
  onClose?: MouseEventHandler;
}

export const Alert = ({ children, color = 'red', onClose }: Props) => (
  <div className={`alert--${color} alert--box`}>
    <Typography variant="subtitle2" textColor={color}>
      {children}
    </Typography>
    <Typography variant="subtitle2" textColor={color}>
      <VscClose onClick={onClose} />
    </Typography>
  </div>
);

/**className={`${color} ${size} alert-box`} */
