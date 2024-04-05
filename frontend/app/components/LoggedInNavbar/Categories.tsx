import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenState } from './categoryReducer';
import { RootState } from '@/app/store/RootReducer';
import CategoryDatas from './CategoryDatas';

function Categories() {
    const state = useSelector((state: RootState) => state.categoryReducer);
    const [subHover, setSubHover] = useState(false);
    const dispatch = useDispatch();

    console.log(state.open9);

    console.log(subHover)

    const closeSubHover = (category : string) => {
        console.log("closeSubHover", category)
        setSubHover(false);
        dispatch(setOpenState({ category, isOpen: false }))
    }

    const openSubHover = (category : string) => {
        console.log("openSubHover", category)
        setSubHover(true);
        dispatch(setOpenState({ category, isOpen: true }))
    }

    

    

    return (
        <div className='z-20'>
            <div className='w-full bg-orange-50 flex justify-between px-[5vw] h-10  pt-2'>
                <p  className='w-[10vw] h-full'
                    onMouseOver={() => dispatch(setOpenState({ category: 'open1', isOpen: true }))} 
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open1', isOpen : subHover ? true : false  }))}
                >
                    Tech
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open2', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open2', isOpen : subHover ? true : false  }))}
                >
                    Writing
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open3', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open3', isOpen : subHover ? true : false  }))}
                >
                    Design
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open4', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open4', isOpen : subHover ? true : false }))}
                >
                    Marketing  
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open5', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open5', isOpen : subHover ? true : false  }))}
                >
                    Editing
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open6', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open6', isOpen : subHover ? true : false  }))}
                >
                    Business
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open7', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open7', isOpen : subHover ? true : false  }))}
                >
                    Audios
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open8', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open8', isOpen : subHover ? true : false  }))}
                >
                    Sales
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open9', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open9', isOpen : subHover ? true : false  }))}
                    
                >
                    Media
                </p>
                
            </div>
            {Object.keys(state).map(category => (
                state[category] && (
                    <div 
                        onMouseEnter={ () => openSubHover(category)}
                        onMouseLeave={() => closeSubHover(category)}
                        key={category}                  
                        className='w-full z-100 bg-orange-50 flex text-sm   flex-wrap items-center pl-20 '
                    >
                        {

                            category === 'open1' &&  CategoryDatas.tecnology.map(data => (
                                <div 

                                    key={data}
                                    className=' h-full w-48 m-4'
                                >
                                    {data}
                                </div>
                            ))
                        }
                        {
                            category === 'open2' &&  CategoryDatas.writing.map(data => (
                                <div 
                                    key={data}
                                    className=' h-full w-48 m-4'
                                >
                                    {data}
                                </div>
                            ))
                        }
                        {
                            category === 'open3' &&  CategoryDatas.design.map(data => (
                                <div 
                                    key={data}
                                    className=' h-full w-48 m-4'
                                >
                                    {data}
                                </div>
                            ))
                        }
                        {
                            category === 'open4' &&  CategoryDatas.marketing.map(data => (
                                <div 
                                    key={data}
                                    className=' h-full w-48 m-4'
                                >
                                    {data}
                                </div>
                            ))
                        }
                        {
                            category === 'open5' &&  CategoryDatas.editing.map(data => (
                                <div 
                                    key={data}
                                    className=' h-full w-48 m-4'
                                >
                                    {data}
                                </div>
                            ))
                        }
                        {
                            category === 'open6' &&  CategoryDatas.business.map(data => (
                                <div 
                                    key={data}
                                    className=' h-full w-48 m-4'
                                >
                                    {data}
                                </div>
                            ))
                        }
                        {
                            category === 'open7' &&  CategoryDatas.audio.map(data => (
                                <div 
                                    key={data}
                                    className=' h-full w-48 m-4'
                                >
                                    {data}
                                </div>
                            ))
                        }
                        {
                            category === 'open8' &&  CategoryDatas.sales.map(data => (
                                <div 
                                    key={data}
                                    className=' h-full w-48 m-4'
                                >
                                    {data}
                                </div>
                            ))
                        }
                        {
                            category === 'open9' &&  CategoryDatas.media.map(data => (
                                <div 
                                    key={data}
                                    className=' h-full w-48 m-4'
                                >
                                    {data}
                                </div>
                            ))
                        }
                    </div>
                )
            ))}
        </div>
    );
}

export default Categories;
