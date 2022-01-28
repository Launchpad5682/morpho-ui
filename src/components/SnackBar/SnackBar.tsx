import React, { HTMLAttributes, MouseEventHandler } from 'react';
import { VscClose } from 'react-icons/vsc';
import { Typography } from '../..';
import './SnackBar.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  variant: 'baseline' | 'stacked' | 'leading';
  color: 'red' | 'green' | 'blue' | 'yellow' | 'pink';
  backgroundColor: 'white' | 'black';
  textColor: 'white' | 'black';
  message: string;
  buttonText: string;
  onButtonPress?: MouseEventHandler;
  onClose?: MouseEventHandler;
}

/**
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
  backgroundColor = 'black',
  textColor = 'white',
  onButtonPress,
  onClose,
}: Props) => {
  return (
    <div
      className={`snackbar snackbar--${variant} snackbar--${backgroundColor}`}
    >
      <div className="snackbar__text">
        <Typography variant="subtitle1" textColor={textColor}>
          {message}
        </Typography>
      </div>
      <div className="snackbar__buttonicon">
        <button onClick={onButtonPress} className={`snackbar__button`}>
          <Typography variant="button" textColor={color}>
            {buttonText}
          </Typography>
        </button>
        <Typography variant="button">
          <VscClose onClick={onClose} />
        </Typography>
      </div>
    </div>
  );
};
