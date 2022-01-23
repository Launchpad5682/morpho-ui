import React, { HTMLAttributes } from 'react';
import { CustomNavLink } from '../../helper/CustomNavLink/CustomNavLink';
import './Tabs.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  navList: { to: string; name: string; color: string }[];
  color: 'black' | 'white';
}

/**
 * @param navList
 * You need to pass navList of the format
 * [{to: "/document", name: "Document", color: "red"}]
 * Take colors from 'red' | 'green' | 'yellow' | 'blue' | 'pink'
 * @param color
 * Enter default font color
 * @returns Tab Component
 */
export const Tabs = ({ navList, color }: Props) => {
  return (
    <nav className="tabs__navlist">
      {navList
        ? navList.map((navItem) => (
            <CustomNavLink
              activeClassName={`tabs__navlink--active navlink__active--${navItem.color}`}
              inactiveClassName={`tabs__navlink`}
              className={`tab__navlink tab__navlink--${color}`}
              to={navItem.to}
            >
              {navItem.name}
            </CustomNavLink>
          ))
        : null}
    </nav>
  );
};
