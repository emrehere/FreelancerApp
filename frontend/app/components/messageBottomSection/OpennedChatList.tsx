import React from 'react'
import Image from 'next/image'

function OpennedChatList() {

    const userNameDatas = ["Ahmet", "Mehmet", "John", "Alice", "Bob", "Catherine", "David", "Emma", "Frank", "Grace",
        "Harry", "Ivy", "Jack", "Karen", "Leo", "Maria", "Nathan", "Olivia",
        "Peter", "Quincy", "Rachel", "Sophia"]

    return (
        <div>
            <div className='bg-white w-52 h-[20rem] rounded-tl-xl overflow-y-scroll '>
                {
                    userNameDatas.map((item, index) => {
                        return (
                            <div key={index} >
                                <div  className='flex cursor-pointer items-center space-x-2 p-2 ml-2'>
                                    <Image className='rounded-full' src={"/kadin.webp"} width={30} height={30} alt="kadin" />
                                    <div  className='flex items-center '>
                                        <p className=' tracking-wide'>{item}</p>
                                    </div>

                                </div>
                                {
                                    index < userNameDatas.length - 1 && <hr className='border-gray-300
                                border-1 h-1 w-[90%] mx-2' />
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OpennedChatList
