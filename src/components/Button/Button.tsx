import './Button.css';
import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant: 'solid' | 'outline' | 'floating';
  size: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'red';
  icon?: ReactNode;
  link?: string;
}

/**
 *
 * @param children
 * pass text as a children.
 * @param variant
 * solid, outline and floating types.
 * @param size
 * "sm", "md", and "lg" sizes.
 * @param icon
 * pass icon for icon based button
 * @returns Button
 */

export const Button = ({
  children = null,
  variant,
  color = 'green',
  size,
  icon = null,
}: Props) => {
  return variant === 'floating' ? (
    <button
      className={`
    ${
      size === 'sm'
        ? 'button__floating--sm'
        : size === 'md'
        ? 'button__floating--md'
        : 'button__floating--lg'
    }
    ${`button__floating button--${color}`}
    `}
    >
      {icon !== null ? icon : null}
    </button>
  ) : (
    <button
      className={`
    ${
      size === 'sm' ? 'button--sm' : size === 'md' ? 'button--md' : 'button--lg'
    }
    ${
      variant === 'solid'
        ? `button__solid button--${color}`
        : `button__outline button__outline--${color}`
    }
    `}
    >
      {icon !== null ? icon : null}
      {children}
    </button>
  );
};