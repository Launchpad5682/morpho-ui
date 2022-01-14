import React, { HTMLAttributes, ReactNode } from 'react';
import './Alert.css';

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  color?: 'red' | 'green' | 'yellow' | 'blue';
  size?: 'sm' | 'md' | 'lg';
}

export const Alert = ({ children, color = 'red', size = 'sm' }: Props) => (
  <p className={`${color} ${size} alert-box`}>{children}</p>
);
