import React, { useEffect } from 'react'

export default function useWindowResize(cb, dependencies) {
    useEffect(() => {

        window.addEventListener('resize', cb)

        cb()

        return () => {
            window.removeEventListener('resize', cb)
        }

    }, dependencies)
}
