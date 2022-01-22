import React, { HTMLAttributes, MouseEventHandler } from 'react';
import { VscClose } from 'react-icons/vsc';
import './SnackBar.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  variant: 'baseline' | 'stacked' | 'leading';
  color: 'red' | 'green' | 'blue' | 'yellow' | 'pink';
  message: string;
  buttonText: string;
  onButtonPress?: MouseEventHandler;
  onClose?: MouseEventHandler;
}

/**
 * SnackBar must be used in the main component as it needs
 * to be absolute to viewports with global state to on/off
 * when needed.
 * @param variant
 * Choose a variant from baseline, stacked and leading.
 * @param message
 * Enter a message for snackbar.
 * @param buttonText
 * Enter text for button
 * @param onButtonPress
 * Add handler for button to perform someting.
 * @param onClose
 * Add handler for cross/close icon. It can contain the
 * state for switching on/off
 * @returns Snackbar
 */

export const SnackBar = ({
  variant,
  message,
  buttonText,
  color,
  onButtonPress,
  onClose,
}: Props) => {
  return (
    <div className={`snackbar snackbar--${variant}`}>
      <div className="snackbar__text">{message}</div>
      <div className="snackbar__buttonicon">
        <button
          onClick={onButtonPress}
          className={`snackbar__button snackbar__button--${color}`}
        >
          {buttonText}
        </button>
        <VscClose onClick={onClose} className="snackbar__closeicon" />
      </div>
    </div>
  );
};
