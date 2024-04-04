import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenState } from './categoryReducer';
import { RootState } from '@/app/store/RootReducer';
import CategoryDatas from './CategoryDatas';

function Categories() {
    const state = useSelector((state: RootState) => state.categoryReducer);
    const dispatch = useDispatch();

    console.log(CategoryDatas.tecnology)

    return (
        <div className='z-20'>
            <div className='w-full bg-orange-50 flex justify-between px-[5vw] h-10  pt-2'>
                <p  className='w-[10vw] h-full'
                    onMouseOver={() => dispatch(setOpenState({ category: 'open1', isOpen: true }))} 
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open1', isOpen: false }))}
                >
                    Tech
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open2', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open2', isOpen: false }))}
                >
                    Writing
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open3', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open3', isOpen: false }))}
                >
                    Design
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open4', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open4', isOpen: false }))}
                >
                    Marketing  
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open5', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open5', isOpen: false }))}
                >
                    Editing
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open6', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open6', isOpen: false }))}
                >
                    Business
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open7', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open7', isOpen: false }))}
                >
                    Audios
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open8', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open8', isOpen: false }))}
                >
                    Sales
                </p>
                <p 
                    className='w-[10vw] h-full' 
                    onMouseOver={() => dispatch(setOpenState({ category: 'open9', isOpen: true }))}
                    onMouseLeave={() => dispatch(setOpenState({ category: 'open9', isOpen: false }))}
                >
                    Media
                </p>
                
            </div>
            {Object.keys(state).map(category => (
                state[category] && (
                    <div 
                        key={category}
                        onMouseOver={() => dispatch(setOpenState({ category, isOpen: true }))} 
                        onMouseLeave={() => dispatch(setOpenState({ category, isOpen: false }))}
                        className='w-full z-100 bg-orange-50 flex text-sm  flex-wrap items-center pl-20 pt-4'
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
