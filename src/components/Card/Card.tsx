/**
- []  Cards with badges
- [x]  Cards with dismiss
- [x]  Cards with text overlay
- []  Text only cards
- [x]  Vertical/Horizontal cards
- [x]  Cards with shadow
 */

// Webkit line clamp
import './Card.css';
import React, { HTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { VscClose } from 'react-icons/vsc';
import { Typography } from '../..';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type: 'text-image' | 'text-only';
  headingColor?:
    | 'white'
    | 'black'
    | 'red'
    | 'green'
    | 'yellow'
    | 'blue'
    | 'pink';
  shadowColor?:
    | 'white'
    | 'black'
    | 'red'
    | 'green'
    | 'yellow'
    | 'blue'
    | 'pink';
  borderColor?:
    | 'white'
    | 'black'
    | 'red'
    | 'green'
    | 'yellow'
    | 'blue'
    | 'pink';
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
  type,
  imageURL = '',
  align = 'vertical',
  size = 'md',
  title,
  subTitle,
  headingColor,
  shadowColor = 'black',
  borderColor = 'black',
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
        } ${
          shadow === true ? `card__shadow--${shadowColor}` : null
        } card__border--${borderColor}`}
      >
        <img src={imageURL} className="image--fitheight" />
        <div className="card__flexrow--headingoverlay">
          <Typography variant="h5" textColor={headingColor}>
            {title}
          </Typography>
          <Typography variant="subtitle1" textColor={headingColor}>
            {subTitle}
          </Typography>
        </div>
        <div className="container">
          {dismiss === true ? (
            <VscClose
              className="icon--size dismiss__flexrow--position"
              onClick={onDismiss}
            />
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
        } ${
          shadow === true ? `card__shadow--${shadowColor}` : null
        } card__border--${borderColor}`}
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
            <Typography variant="h5" textColor={headingColor}>
              {title}
            </Typography>
            <Typography variant="subtitle1" textColor={headingColor}>
              {subTitle}
            </Typography>
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
      } ${
        shadow === true ? `card__shadow--${shadowColor}` : null
      } card__border--${borderColor}`}
    >
      {dismiss === true ? (
        <VscClose
          className="icon--size card__text-only--dismiss--position"
          onClick={onDismiss}
        />
      ) : null}
      <Typography variant="h5" textColor={headingColor}>
        {title}
      </Typography>
      <Typography variant="subtitle1" textColor={headingColor}>
        {subTitle}
      </Typography>
      {children}
    </div>
  );
};
