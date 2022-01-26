import React, { HTMLAttributes, MouseEventHandler } from 'react';
import { VscClose } from 'react-icons/vsc';
import { Typography } from '../..';
import './Chips.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  chips:
    | {
        id: string;
        text: string;
        color: 'red' | 'green' | 'yellow' | 'blue' | 'pink' | 'black' | 'gray';
      }[]
    | undefined;
  title: string;
  variant?: 'basic' | 'stacked';
  onCross?: MouseEventHandler;
}

/**
 * @param chips
 * Inject chips list in the form {id: something, text: something,
 * color: 'red' | 'green' | 'yellow' | 'blue' | 'pink' | 'black' | 'gray' }
 * @param title
 * Enter any title for the chip container or can leave empty.
 * @param variant
 * Choose between "basic" or "stacked".
 * @param onCross
 * Add handler for closing icon button.
 * @returns Chips
 */

export const Chips = ({
  chips = undefined,
  title = '',
  variant = 'basic',
  onCross = () => {
    console.log('removed');
  },
}: Props) => {
  return (
    <>
      {title !== '' ? <Typography variant="h4">{title}</Typography> : null}
      <div className={`chips__container--${variant}`}>
        {chips !== undefined
          ? chips.map((chip) => (
              <span className={`chip--design chip--${chip.color}`} id={chip.id}>
                <Typography variant="subtitle2">{chip.text} </Typography>
                <Typography variant="subtitle2">
                  <VscClose onClick={onCross} className="chip__closeicon" />
                </Typography>
              </span>
            ))
          : null}
      </div>
    </>
  );
};
