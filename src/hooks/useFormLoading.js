import React, { useState, useCallback } from 'react'

export default function useFormLoading(text, loadingText = 'sending...') {
    const [buttonText, setButtonText] = useState(text)

    const handleLoading = useCallback(isLoading => {
        if (isLoading) setButtonText(loadingText)
    }, [])

    return { buttonText, handleLoading }
}