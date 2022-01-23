import { HTMLAttributes, ReactNode } from 'react';
import React from 'react';
export interface Props extends HTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

export const Input = () => {
  return <div></div>;
};
