import React from 'react';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { joinClasses } from '../../utils/utils';

import './Button.scss'

const Button = ({
    activeClassName,
    children,
    disabled,
    handleClick,
    modifiers,
    otherClasses,
    navLink,
    page,
    to
}) =>
    to ?
        navLink ?
            <NavLink activeClassName={activeClassName} to={`${to}`} className={joinClasses('btn', modifiers, otherClasses)}>
                {children}
            </NavLink>
            :
            <Link to={`${to}`} className={joinClasses('btn', modifiers, otherClasses)}>
                {children}
            </Link>
        :
        <button onClick={handleClick} data-page={page} disabled={disabled} className={`${joinClasses('btn', modifiers, otherClasses)}`}>
            {children}
        </button>


export default Button;