import React, { useState, useEffect, useReducer } from 'react'

import Button from '../Button/Button'
import Project from '../Project/Project'
import SvgIcon from '../SvgIcon/SvgIcon'

import './Carousel.scss'

const carouselInitialState = {
    displayPage: 1,
    fetchPage: 1,
    contentPosition: 0,
    projects: [],
    availablePages: 1,
    hasMoreProjects: true
}


const carouselReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_NEXT_PAGE':
            return {
                ...state,
                displayPage: state.displayPage + 1,
                contentPosition: state.contentPosition - 100,
                fetchPage: state.fetchPage + 1
            };
        case 'SHOW_PREV_PAGE':
            return {
                ...state,
                displayPage: state.displayPage - 1,
                contentPosition: state.contentPosition + 100
            };
        case 'ADD_PROJECTS':
            return {
                ...state,
                projects: [...state.projects, ...action.projects],
                availablePages: Math.ceil((state.projects.length + action.projects.length) / 2) || 1,
                hasMoreProjects: action.projects.length < 4 ? false : true
            }
        default:
            return state
    }
}

const fetchInititalState = {
    isLoading: true,
    hasError: false
}

const fetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                hasError: false
            }
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        default:
            return state
    }
}

export default function Carousel() {
    const [carouselState, dispatch] = useReducer(carouselReducer, carouselInitialState)
    const [fetchState, dispatchFetch] = useReducer(fetchReducer, fetchInititalState)

    useEffect(() => {
        const controller = new AbortController()

        async function fetchProjects() {
            try {
                dispatchFetch({ type: 'FETCH_START' })
                const response = await fetch(`http://localhost:5000/api/v1/projects?limit=4&page=${carouselState.fetchPage}&status=coming`, { signal: controller.signal })
                const data = await response.json()

                if (!response.ok) throw new Error(data.message)
                dispatch({ type: 'ADD_PROJECTS', projects: data.data.projects })
                dispatchFetch({ type: 'FETCH_SUCCESS' })
            } catch (error) {
                if (error.name === 'AbortError') console.log(error)
                else dispatchFetch({ type: 'FETCH_FAILURE' })
            }
        }
        if (carouselState.hasMoreProjects) fetchProjects()
    }, [carouselState.hasMoreProjects, carouselState.fetchPage])

    const showNextPage = () => dispatch({ type: 'SHOW_NEXT_PAGE' })
    const showPrevPage = () => dispatch({ type: 'SHOW_PREV_PAGE' })

    console.log(carouselState.hasMoreProjects, carouselState.displayPage, carouselState.availablePages)

    return (
        <div class="carousel">
            {
                carouselState.contentPosition < 0 && <Button handleClick={showPrevPage} root='carousel__arrow-button' modifiers={['left']}>
                    <SvgIcon svgId='icon-chevron-left' root='carousel__arrow-icon' />
                </Button>
            }{
                carouselState.displayPage === carouselState.availablePages && !carouselState.hasMoreProjects ? null : <Button handleClick={showNextPage} root='carousel__arrow-button' modifiers={['right']}>
                    <SvgIcon svgId='icon-chevron-right' root='carousel__arrow-icon' />
                </Button>
            }


            <div class="carousel__container">
                <div
                    style={{
                        transform: `translateX(${carouselState.contentPosition}%)`
                    }}
                    class="carousel__content">
                    {
                        carouselState.projects.map(project => {
                            const { name, interestRate, duration, type, location, paid, minTarget, totalTarget } = project
                            return <Project
                                name={name}
                                interestRate={interestRate}
                                duration={duration}
                                type={type}
                                location={location}
                                paid={paid}
                                minTarget={minTarget}
                                totalTarget={totalTarget}
                            />
                        })
                    }
                    {
                        fetchState.isLoading ? <h1>Loading...</h1>
                            : carouselState.projects.length === 0 ? <h1>No active projects available.</h1> : ''
                    }
                </div>
            </div>
        </div>
    )
}
// export default function Carousel() {
//     const [contentPosition, setContentPosition] = useState(0)
//     const [projects, setProjects] = useState([])
//     const [fetchPage, setFetchPage] = useState(1)
//     const [isLoading, setIsLoading] = useState(true)
//     const [hasMore, setHasMore] = useState(true)
//     const [displayedPage, setDisplayedPage] = useState(1)
//     const [maxVisiblePages, setMaxVisiblePages] = useState(1)

//     useEffect(() => {
//         const controller = new AbortController()

//         async function fetchProjects() {
//             try {
//                 setIsLoading(true)
//                 const response = await fetch(`http://localhost:5000/api/v1/projects?limit=4&page=${fetchPage}&status=coming`, { signal: controller.signal })
//                 const data = await response.json()

//                 if (!response.ok) throw new Error(data.message)
//                 if (data.data.projects.length < 4) {
//                     setHasMore(false)
//                 }
//                 setMaxVisiblePages(Math.ceil((projects.length + data.data.projects.length) / 2))
//                 setProjects(prev => [...prev, ...data.data.projects])
//             } catch (error) {
//                 if (error.name === 'AbortError') console.log(error)
//                 else console.log(error)
//             } finally {
//                 setIsLoading(false)
//             }
//         }
//         if (hasMore) fetchProjects()
//     }, [fetchPage, hasMore, displayedPage])

//     const handleCarousel = direction => {
//         if (direction === 'forward') {
//             setContentPosition(prev => prev - 100)
//             setFetchPage(prev => prev + 1)
//             setDisplayedPage(prev => prev + 1)
//         }
//         if (direction === 'backward') {
//             setDisplayedPage(prev => prev - 1)
//             setContentPosition(prev => prev + 100)
//         }

//     }


//     const handleForward = () => handleCarousel('forward')
//     const handleBackward = () => handleCarousel('backward')

//     return (
//         <div class="carousel">
//             {
//                 contentPosition < 0 && <Button handleClick={handleBackward} root='carousel__arrow-button' modifiers={['left']}>
//                     <SvgIcon svgId='icon-chevron-left' root='carousel__arrow-icon' />
//                 </Button>
//             }{
//                 displayedPage === maxVisiblePages && !hasMore ? null : <Button handleClick={handleForward} root='carousel__arrow-button' modifiers={['right']}>
//                     <SvgIcon svgId='icon-chevron-right' root='carousel__arrow-icon' />
//                 </Button>
//             }


//             <div class="carousel__container">
//                 <div
//                     style={{
//                         transform: `translateX(${contentPosition}%)`
//                     }}
//                     class="carousel__content">
//                     {
//                         projects.map(project => {
//                             const { name, interestRate, duration, type, location, paid, minTarget, totalTarget } = project
//                             return <Project
//                                 name={name}
//                                 interestRate={interestRate}
//                                 duration={duration}
//                                 type={type}
//                                 location={location}
//                                 paid={paid}
//                                 minTarget={minTarget}
//                                 totalTarget={totalTarget}
//                             />
//                         })
//                     }
//                     {
//                         isLoading ? <h1>Loading...</h1> : ''
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

