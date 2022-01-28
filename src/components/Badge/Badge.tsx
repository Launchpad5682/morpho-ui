import './Badge.css';
import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant: 'avatar' | 'icon';
  color: 'red' | 'green' | 'yellow' | 'blue' | 'pink';
  number: Number;
  mode?: 'online' | 'offline';
  onClickBadge?: MouseEventHandler<HTMLButtonElement>;
}

/**
 *
 * @param variant
 * avatar: use sm-avatar or md-avatar for avatar variant badge
 * <Avatar size="sm-avatar" />
 * @returns
 */
export const Badge = ({
  children,
  variant,
  color = 'blue',
  number,
  mode,
  onClickBadge = () => {
    console.log('badge clicked');
  },
}: Props) => {
  return (
    <button
      onClick={onClickBadge}
      className={`${
        variant === 'avatar'
          ? 'badge__avatar'
          : `badge__icon badge__icon--${color}`
      }`}
    >
      {variant === 'icon' ? (
        <span className={`badge__icon--counter icon__counter--${color}`}>
          {number}
        </span>
      ) : mode === 'online' ? (
        <span className="badge_avatar badge__avatar--online" />
      ) : (
        <span className="badge_avatar badge__avatar--offline" />
      )}
      {children}
    </button>
  );
};
