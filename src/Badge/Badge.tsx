import './Badge.css';
import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant: 'avatar' | 'icon';
  number: Number;
  mode?: 'online' | 'offline';
}

export const Badge = ({ children, variant, number, mode }: Props) => {
  return (
    <button
      className={`${variant === 'avatar' ? 'badge__avatar' : 'badge__icon'}`}
    >
      {variant === 'icon' ? (
        <span className="badge__icon--counter">{number}</span>
      ) : mode === 'online' ? (
        <span className="badge_avatar badge__avatar--online" />
      ) : (
        <span className="badge_avatar badge__avatar--offline"/>
      )}
      {children}
    </button>
  );
};
