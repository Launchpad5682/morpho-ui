import React, { MouseEventHandler, ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import { VscClose } from 'react-icons/vsc';
import { Typography } from '../..';
import './Modal.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  heading: string;
  headingColor:
    | 'white'
    | 'black'
    | 'red'
    | 'green'
    | 'yellow'
    | 'pink'
    | 'blue';
  backgroundColor?: 'white' | 'dark';
  onClose?: MouseEventHandler;
}

/**
 * How to use ?
 * import and use Modal component and then use
 * state to switch on and off the modal component.
 * @param children
 * Inject any of the React component as a children.
 * @param heading
 * Enter the heading for the modal.
 * @param onClose
 * Add the close handler to switch off the modal using the
 * modal on/off state.
 * @returns Modal
 */

export const Modal = ({
  heading,
  backgroundColor = 'dark',
  headingColor = 'white',
  children,
  onClose,
}: Props) => {
  return (
    <div className="fullscreen">
      <div className="modal" onClick={onClose}></div>
      <div className={`modal__container modal__container--${backgroundColor}`}>
        <div className="modal__container--header">
          <Typography variant="h5" textColor={headingColor}>
            {heading}
          </Typography>
          <Typography variant="h5" textColor={headingColor}>
            <VscClose onClick={onClose} />
          </Typography>
        </div>
        <div className="modal__container--body">{children}</div>
      </div>
    </div>
  );
};
