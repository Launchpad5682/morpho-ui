//  https://storybook.js.org/docs/react/writing-stories/introduction
import React, { HTMLAttributes } from 'react';
import './Avatar.css';

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  imageURL?: string;
  size?: 'sm-avatar' | 'md-avatar' | 'lg-avatar' | 'xl-avatar';
  type?: 'round' | 'square';
}

/**
 * @param imageURL
 * enter the image url you want to use in the avatar,
 * @param size
 * choose from any of three sm-avatar, md-avatar, and lg-avatar,
 * @param type
 * choose a shape between square and round.
 * @returns Avatar component
 */
export const Avatar = ({
  imageURL = 'https://images.unsplash.com/photo-1602870049368-9c8265ff3693?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  size = 'sm-avatar',
  type = 'round',
}: Props) => (
  <span className={`${size} ${type} fit-image`}>
    <img src={imageURL} className={`img-fit ${type}`} />
  </span>
);
