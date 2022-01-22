import React, { HTMLAttributes, MouseEventHandler } from 'react';
import { VscClose } from 'react-icons/vsc';
import './Chips.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  chips:
    | {
        text: string;
        color: 'red' | 'green' | 'yellow' | 'blue' | 'pink' | 'black' | 'gray';
      }[]
    | undefined;
  title: string;
  variant?: 'basic' | 'stacked';
  onCross?: MouseEventHandler;
}

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
      {title !== '' ? <h4>{title}</h4> : null}
      <div className={`chips__container--${variant}`}>
        {chips !== undefined
          ? chips.map((chip) => (
              <span className={`chip--design chip--${chip.color}`}>
                {chip.text}
                <VscClose onClick={onCross} className="chip__closeicon" />
              </span>
            ))
          : null}
      </div>
    </>
  );
};
