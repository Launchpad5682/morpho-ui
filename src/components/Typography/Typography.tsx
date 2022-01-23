import React, { HTMLAttributes, ReactNode } from 'react';
import './Typography.css';

export interface Props extends HTMLAttributes<HTMLTextAreaElement> {
  children: ReactNode;
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline';
}

/**
 * @param children
 * Pass any text
 * @param variant
 * select variant from | 'h1','h2','h3','h4','h5','h6',
 * 'subtitle1','subtitle2','body1','body2','button','
 * caption','overline'
 * @returns Typography
 */

export const Typography = ({ variant, children }: Props) => {
  switch (variant) {
    case 'h1':
      return <h1 className="h1__typography">{children}</h1>;

    case 'h2':
      return <h2 className="h2__typography">{children}</h2>;

    case 'h3':
      return <h3 className="h3__typography">{children}</h3>;

    case 'h4':
      return <h4 className="h4__typography">{children}</h4>;

    case 'h5':
      return <h5 className="h5__typography">{children}</h5>;

    case 'h6':
      return <h6 className="h6__typography">{children}</h6>;

    case 'subtitle1':
    case 'subtitle2':
      return <text>{children}</text>;

    case 'body1':
    case 'body2':
      return <p className={`${variant}__typography`}>{children}</p>;

    case 'button':
    case 'caption':
    case 'overline':
      return <text className={`${variant}__typography`}>{children}</text>;
  }
};
