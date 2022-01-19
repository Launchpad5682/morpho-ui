/**
- [ ]  Cards with badges
- [ ]  Cards with dismiss
- [ ]  Cards with text overlay
- [ ]  Text only cards
- [ ]  Vertical/Horizontal cards
- [ ]  Cards with shadow
 */
import './Card.css';
import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type: 'badged' | 'dismiss' | 'text-overlay' | 'text-only';
  title?: string;
  subTitle?: string;
  imageURL?: string;
  align?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  shadow?: Boolean;
}

/**
 Use sm for small screens because md and lg is not made for small devices. 
 Similarly lg is not made for some tablet sizes. But, can use any size on 
 the large screens.
 */

export const Card = ({
  children,
  //   type,
  imageURL = '',
  align = 'horizontal',
  //   shadow = false,
  size = 'md',
  title,
  subTitle,
  shadow = false,
}: Props) => {
  return align === 'horizontal' ? (
    <div
      className={`card__flexrow ${
        size === 'sm'
          ? 'card__flexrow--sm'
          : size === 'md'
          ? 'card__flexrow--md'
          : 'card__flexrow--lg'
      } ${shadow === true ? 'card--shadow' : null}`}
    >
      <img src={imageURL} className="image--fitheight" />
      <div>
        <div className="card__flexrow--headingoverlay">
          <span className="title">{title}</span>
          <br />
          <span className="subtitle">{subTitle}</span>
        </div>
        {children}
      </div>
    </div>
  ) : (
    <div
      className={`card__flexcolumn ${
        size === 'sm'
          ? 'card__flexcolumn--sm'
          : size === 'md'
          ? 'card__flexcolumn--md'
          : 'card__flexcolumn--lg'
      } ${shadow === true ? 'card--shadow' : null}`}
    >
      <img src={imageURL} className="image--fitwidth" />
      <div>
        <div className="card__flexcolumn--headingoverlay">
          <span className="title">{title}</span>
          <br />
          <span className="subtitle">{subTitle}</span>
        </div>
        {children}
      </div>
    </div>
  );
};
