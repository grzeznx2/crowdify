import React from 'react'

import Button from '../Button'
import SvgIcon from '../../SvgIcon/SvgIcon'

export default function CloseButton({ iconModifiers, ...props }) {

    return (
        <Button root='button-close' {...props}>
            <SvgIcon root='button-close__icon' modifiers={iconModifiers} svgId='icon-cross' />
        </Button>
    )
}