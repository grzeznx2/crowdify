import React from 'react'

import Button from '../Button'
import SvgIcon from '../../SvgIcon/SvgIcon'

export default function RoundButton(props) {
    let svgId = ''

    if (props.modifiers.includes('edit')) svgId = 'icon-edit'
    else if (props.modifiers.includes('abort')) svgId = 'icon-cross'
    else if (props.modifiers.includes('accept')) svgId = 'icon-checkmark'

    return (
        <Button root='button-round' {...props}>
            <SvgIcon root='button-round__icon' svgId={svgId} />
        </Button>
    )
}