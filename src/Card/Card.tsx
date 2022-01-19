/**
- []  Cards with badges
- [x]  Cards with dismiss
- [x]  Cards with text overlay
- []  Text only cards
- [x]  Vertical/Horizontal cards
- [x]  Cards with shadow
 */
import './Card.css';
import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { VscClose } from 'react-icons/vsc';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type: 'text-image' | 'text-only';
  title?: string;
  subTitle?: string;
  imageURL?: string;
  align?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  shadow?: Boolean;
  dismiss?: Boolean;
  onDismiss?: MouseEventHandler;
}

/**
  * @param children
  * It contains the text and bottom icons or any customized component which 
  * should be in div and passed.
  * @param type
  * Choose between two types of Card; Image+text or only text using "text-image"
  * or "text-only" respectively.
  * @param title
  * Add the title for the card.
  * @param subTitle
  * Add the sub-title for the card.
  * @param imageURL
  * Add ImageURL for putting any image.
  * @param align
  * Choose align vertical or horizontal.
  * @param size
  * Choose between sm, md, lg sizes.
  * @param shadow
  * Takes boolean for showing shadow, by default it's false.
  * @param dismiss
  * Add dismiss using boolean, by default disabled.
  * @param onDismisss
  * Add onClick function for dismiss icon.
  * @returns Card 
  * 
  * Use sm for small screens because md and lg is not made for small devices. 
    Similarly lg is not made for some tablet sizes. But, can use any size on 
    the large screens.
  */

export const Card = ({
  children,
  //   type,
  type,
  imageURL = '',
  align = 'vertical',
  size = 'md',
  title,
  subTitle,
  shadow = false,
  dismiss = false,
  onDismiss = () => {
    console.log('dismiss clicked');
  },
}: Props) => {
  return type === 'text-image' ? (
    align === 'horizontal' ? (
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
        <div className="card__flexrow--headingoverlay">
          <span className="title">{title}</span>
          <br />
          <span className="subtitle">{subTitle}</span>
        </div>
        <div className="container">
          {dismiss === true ? (
            <VscClose className="icon--size dismiss__flexrow--position" />
          ) : null}
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
        {dismiss === true ? (
          <VscClose
            className="icon--size dismiss__flexcolumn--position"
            onClick={onDismiss}
          />
        ) : null}
        <div className="container">
          <img src={imageURL} className="image--fitwidth" />
          <div className="card__flexcolumn--headingoverlay">
            <span className="title">{title}</span>
            <br />
            <span className="subtitle">{subTitle}</span>
          </div>
        </div>
        <div>{children}</div>
      </div>
    )
  ) : (
    <div
      className={`card--text-only ${
        size === 'sm'
          ? 'card__flexcolumn--sm'
          : size === 'md'
          ? 'card__flexcolumn--md'
          : 'card__flexcolumn--lg'
      } ${shadow === true ? 'card--shadow' : null}`}
    >
      {dismiss === true ? (
        <VscClose
          className="icon--size card__text-only--dismiss--position"
          onClick={onDismiss}
        />
      ) : null}
      <span className="card__textonly--title">{title}</span>
      <br />
      <span className="card__textonly--subtitle">{subTitle}</span>
      {children}
    </div>
  );
};
