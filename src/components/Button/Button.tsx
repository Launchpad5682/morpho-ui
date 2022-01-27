import './Button.css';
import React, { HTMLAttributes, ReactNode } from 'react';
import { Typography } from '../..';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant: 'solid' | 'outline' | 'floating';
  size: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg';
  color?: 'red' | 'green' | 'blue' | 'yellow' | 'pink';
  icon?: ReactNode;
  link?: string;
}

/**
 * sm button size is good to use,sm for floating action 
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
  rounded = 'sm',
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
      {icon !== null ? (
        <Typography variant="icon" textColor="white">
          {icon}
        </Typography>
      ) : null}
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
    } button__rounded--${rounded} ${icon !== null ? 'button__icon' : ''}
    `}
    >
      {icon !== null ? (
        <Typography
          variant="icon"
          textColor={variant === 'outline' ? color : 'white'}
        >
          {icon}
        </Typography>
      ) : null}
      <Typography
        variant="button"
        textColor={variant === 'outline' ? color : 'white'}
      >
        {children}
      </Typography>
    </button>
  );
};
