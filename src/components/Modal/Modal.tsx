import React, { MouseEventHandler, ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import { VscClose } from 'react-icons/vsc';
import './Modal.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  heading: string;
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

export const Modal = ({ heading, children, onClose }: Props) => {
  return (
    <div className="fullscreen">
      <div className="modal" onClick={onClose}></div>
      <div className="modal__container">
        <div className="modal__container--header">
          <span className="modal__container--heading">{heading}</span>
          <VscClose onClick={onClose} className="icon--size" />
        </div>
        <div className="modal__container--body">{children}</div>
      </div>
    </div>
  );
};
