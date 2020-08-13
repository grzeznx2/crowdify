import React from 'react';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { joinClasses } from '../../utils/utils';

import './Button.scss'

const Button = ({
    activeClassName,
    children,
    disabled,
    editAction,
    handleClick,
    modifiers,
    navLink,
    otherClasses,
    page,
    relatedInput,
    root = 'button',
    to
}) =>
    to ?
        navLink ?
            <NavLink activeClassName={activeClassName} to={`${to}`} className={joinClasses(root, modifiers, otherClasses)}>
                {children}
            </NavLink>
            :
            <Link to={`${to}`} className={joinClasses(root, modifiers, otherClasses)}>
                {children}
            </Link>
        :
        <button onClick={handleClick} data-page={page} data-edit-action={editAction} data-related-input={relatedInput} disabled={disabled} className={`${joinClasses(root, modifiers, otherClasses)}`}>
            {children}
        </button>


export default Button;