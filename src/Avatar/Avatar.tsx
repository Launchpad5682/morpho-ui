//  https://storybook.js.org/docs/react/writing-stories/introduction
import React, { HTMLAttributes } from 'react';
import './Avatar.css';

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  imageURL: string;
  size?: 'sm-avatar' | 'md-avatar' | 'lg-avatar';
  type?: 'round' | 'square';
}

const URL =
  'https://images.unsplash.com/photo-1602870049368-9c8265ff3693?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80';

export const Avatar = ({
  imageURL = URL,
  size = 'sm-avatar',
  type = 'round',
}: Props) => (
  <span className={`${size} ${type} fit-image`}>
    <img src={imageURL} className={`img-fit ${type}`} />
  </span>
);
