import { useReducer, useCallback, useRef, useEffect } from 'react'

const initialState = {
    isLoading: false,
    error: null,
    data: null
}

const fetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                isLoading: true,
                data: null,
                error: null
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            }
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default function useFetch() {
    const [fetchState, dispatch] = useReducer(fetchReducer, initialState)

    const abortControllers = useRef([])

    const sendRequest = useCallback(async options => {
        const abortController = new AbortController()
        abortControllers.current.push(abortController)

        const { url } = options
        const { method } = options || 'GET'
        const { headers } = options || {}
        const body = JSON.stringify(options.body) || null
        const { signal } = abortController



        try {
            dispatch({ type: 'FETCH_START' })
            const response = await fetch(url, { method, body, headers, signal })
            const responseData = await response.json()
            if (!response.ok) throw Error(responseData.message)
            // console.log(responseData)
            dispatch({ type: 'FETCH_SUCCESS', payload: responseData.data })
        } catch (error) {
            // console.log(error.message)
            dispatch({ type: 'FETCH_FAILURE', payload: error.message })
        }
    }, [])

    useEffect(() => {
        for (let controller of abortControllers.current) {
            controller.abort()
        }
    }, [])

    return { fetchState, sendRequest }
}