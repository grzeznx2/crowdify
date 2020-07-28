import React from 'react';

import Sprite from '../../assets/img/sprite.svg'

import { joinClasses } from '../../utils/utils'

const SvgIcon = ({ svgId, root, modifiers, otherClasses }) =>
    <svg className={joinClasses(root, modifiers, otherClasses)}>
        <use xlinkHref={`${Sprite}#${svgId}`} />
    </svg>

export default SvgIcon;