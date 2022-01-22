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
