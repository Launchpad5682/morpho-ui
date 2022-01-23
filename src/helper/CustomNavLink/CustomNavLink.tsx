import React, { HTMLAttributes } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface Props extends HTMLAttributes<HTMLAnchorElement> {
  activeClassName: string;
  className: string;
  inactiveClassName: string;
  to: any;
}

/**
 * Custom NavLink which supports active link color styles.
 * @param activeClassName
 * Styling for active state
 * @param className
 * Styling for normal non-selected or initial state
 * @param inactiveClassName
 * Styling for inactive state
 * @param to
 * Provide full path location
 * @returns CustomLink 🚀 
 */

export const CustomNavLink = ({
  activeClassName,
  className,
  inactiveClassName,
  to,
  ...rest
}: Props) => {
  const location = useLocation();
  // console.log(location);
  // console.log(location.pathname);
  const isActive = location.pathname === to;
  // console.log(isActive);

  // console.log(inactiveClassName);

  const allClassName =
    className +
    (isActive === true ? ` ${activeClassName}` : ` ${inactiveClassName}`);

  // console.log(allClassName);
  return <Link className={allClassName} to={to} {...rest} />;
};
