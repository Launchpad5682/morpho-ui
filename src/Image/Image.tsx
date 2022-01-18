import './Image.css';
import React, { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLImageElement> {
  imageURL: string;
  alt: string;
  rounded?: Boolean;
}

export const Image = ({ imageURL, alt, rounded = false }: Props) => (
  <img
    src={imageURL}
    alt={alt}
    className={`${rounded == true ? 'image__rounded' : null} image__fit`}
  />
);
