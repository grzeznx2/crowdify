import React from 'react'

import Dots from './Dots/Dots'

export default function Loader({ isLoading, error, loadingComp, errorComp, children }) {

    let loadingMarkup

    switch (loadingComp) {
        case 'dots':
            loadingMarkup = <Dots />
            break;

        default:
            loadingMarkup = null;
    }

    return (
        <>
            {
                isLoading ?
                    <>
                        {loadingMarkup}
                    </>
                    :
                    error ?
                        <h2>{error}</h2>
                        :
                        <>
                            {children}
                        </>
            }
        </>
    )
}