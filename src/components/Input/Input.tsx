import { HTMLAttributes, LegacyRef, ReactNode } from 'react';
import React from 'react';
import './Input.css';
export interface Props extends HTMLAttributes<HTMLInputElement> {
  // children: ReactNode;
  type: 'text' | 'password' | 'email';
  labelText: string;
  labelColor?: 'white' | 'black';
  color: 'red' | 'green' | 'blue' | 'yellow' | 'pink';
  statusText?: ReactNode;
  inputRef: LegacyRef<HTMLInputElement> | undefined;
}

/**
 * @param type
 * choose a type between text, password and email.
 * @param labelText
 * choose a label text for input box
 * @param labelColor
 * choose labelColor between white and black
 * @param color
 * choose an animation color from red, green, blue, yellow, and pink
 * @param inputRef
 * pass a ref hook object to control input field
 * @returns
 */

export const Input = ({
  type,
  labelText,
  labelColor = 'black',
  color = 'pink',
  statusText = null,
  inputRef,
}: Props) => {
  return (
    <div className="field__container">
      <div className="inputbox__container">
        <input type={type} ref={inputRef} autoComplete="off" required />
        <label
          className={`inputbox__label--name label__name--${labelColor} inputbox__label--${color}`}
        >
          <span className="inputbox__label--content">{labelText}</span>
        </label>
      </div>
      {statusText}
    </div>
  );
};
