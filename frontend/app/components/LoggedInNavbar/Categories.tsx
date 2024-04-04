import React, { useReducer, useEffect, useState } from 'react'

const initialState = {
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
    open6: false,
    open7: false
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'open1':
            return {  open1: action.payload }
        case 'open2':
            return {  open2: action.payload }
        case 'open3':
            return {  open3: action.payload }
        case 'open4':
            return {  open4: action.payload }
        case 'open5':
            return {  open5: action.payload }
        case 'open6':
            return {  open6: action.payload }
        case 'open7':
            return {  open7: action.payload }
        case 'open8':
            return {  open8: action.payload }
        case 'open9':
            return {  open9: action.payload }
        default:
            return state
    }
}

 

function Categories() {

    const [state, dispatch] = useReducer(reducer, initialState)
    



    console.log("open1", state.open1)

    return (
        <div className='z-20'>
            <div className='w-full bg-orange-50 justify-between flex text-sm px-[5vw] items-center h-12'>
                <p onMouseOver={() => dispatch({ type: 'open1', payload: true })} 
                onMouseLeave={() => dispatch({ type: 'open1', payload: false })} >
                    Technology & Programming
                </p>

                <p className='w-[10vw] h-full' onMouseOver={() => dispatch({ type: 'open2', payload: true })}
                onMouseLeave={() => dispatch({ type: 'open2', payload: false })} >Writing & Translation</p>
                <p className='w-[10vw] h-full' onMouseOver={() => dispatch({ type: 'open3', payload: true })}
                onMouseLeave={() => dispatch({ type: 'open3', payload: false })} >Design</p>
                <p className='w-[10vw] h-full' onMouseOver={() => dispatch({ type: 'open4', payload: true })} 
                onMouseLeave={() => dispatch({ type: 'open4', payload: false })}>Digital Marketing</p>
                <p className='w-[10vw] h-full' onMouseOver={() => dispatch({ type: 'open5', payload: true })} 
                onMouseLeave={() => dispatch({ type: 'open5', payload: false })}>Video, Photo & Image</p>
                <p className='w-[10vw] h-full' onMouseOver={() => dispatch({ type: 'open6', payload: true })} 
                onMouseLeave={() => dispatch({ type: 'open6', payload: false })}>Business</p>
                <p className='w-[10vw] h-full' onMouseOver={() => dispatch({ type: 'open7', payload: true })} 
                onMouseLeave={() => dispatch({ type: 'open7', payload: false })}>Music & Audio</p>
                <p className='w-[10vw] h-full' onMouseOver={() => dispatch({ type: 'open8', payload: true })} 
                onMouseLeave={() => dispatch({ type: 'open8', payload: false })}>Marketing, Branding & Sales</p>
                <p className='w-[10vw] h-full' onMouseOver={() => dispatch({ type: 'open9', payload: true })} 
                onMouseLeave={() => dispatch({ type: 'open9', payload: false })}>Social Media</p>
            </div>
            {
                state.open1 && <div onMouseOver={() => dispatch({ type: 'open1', payload: true })} 
                onMouseLeave={() => dispatch({ type: 'open1', payload: false })}  className='w-full
                 z-100 bg-orange-50 justify-between flex text-sm px-4 h-32'>
                        open1
                </div>
            }
            {
                state.open2 && <div onMouseOver={() => dispatch({ type: 'open2', payload: true })}
                onMouseLeave={() => dispatch({ type: 'open2', payload: false })}  className='w-full
                 z-100 bg-orange-50 justify-between flex text-sm px-4 h-32'>
                        open2
                </div>
            }
            {
                state.open3 && <div onMouseOver={() => dispatch({ type: 'open3', payload: true })}
                onMouseLeave={() => dispatch({ type: 'open3', payload: false })}  className='w-full
                 z-100 bg-orange-50 justify-between flex text-sm px-4 h-32'>
                        open3
                </div>
            }
            {
                state.open4 && <div onMouseOver={() => dispatch({ type: 'open4', payload: true })}
                onMouseLeave={() => dispatch({ type: 'open4', payload: false })}  className='w-full
                 z-100 bg-orange-50 justify-between flex text-sm px-4 h-32'>
                        open4
                </div>
            }
            {
                state.open5 && <div onMouseOver={() => dispatch({ type: 'open5', payload: true })}
                onMouseLeave={() => dispatch({ type: 'open5', payload: false })}  className='w-full
                 z-100 bg-orange-50 justify-between flex text-sm px-4 h-32'>
                        open5
                </div>
            }
            {
                state.open6 && <div onMouseOver={() => dispatch({ type: 'open6', payload: true })}
                onMouseLeave={() => dispatch({ type: 'open6', payload: false })}  className='w-full
                 z-100 bg-orange-50 justify-between flex text-sm px-4 h-32'>
                        open6
                </div>
            }
            {
                state.open7 && <div onMouseOver={() => dispatch({ type: 'open7', payload: true })}
                onMouseLeave={() => dispatch({ type: 'open7', payload: false })}  className='w-full
                 z-100 bg-orange-50 justify-between flex text-sm px-4 h-32'>
                        open7
                </div>
            }
            {
                state.open8 && <div onMouseOver={() => dispatch({ type: 'open8', payload: true })}
                onMouseLeave={() => dispatch({ type: 'open8', payload: false })}  className='w-full
                 z-100 bg-orange-50 justify-between flex text-sm px-4 h-32'>
                        open8
                </div>
            }
            {
                state.open9 && <div onMouseOver={() => dispatch({ type: 'open9', payload: true })}
                onMouseLeave={() => dispatch({ type: 'open9', payload: false })}  className='w-full
                 z-100 bg-orange-50 justify-between flex text-sm px-4 h-32'>
                        open9
                </div>
            }
        </div>
    )
}

export default Categories
