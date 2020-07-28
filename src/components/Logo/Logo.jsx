import React from 'react'

import Button from '../Button/Button'

import './Logo.scss'

export default function Logo({ ...classProps }) {
    return <Button to='/' root='logo' {...classProps}>Crowdify</Button>
}