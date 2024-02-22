"use client"
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store/RootReducer';
import dynamic from "next/dynamic";

const Page1 = dynamic(() => import('@/app/components/modalsComp/page1'), {
    ssr: false
})

const Page2 = dynamic(() => import('@/app/components/modalsComp/page2'), {
    ssr: false
})

const Page3 = dynamic(() => import('@/app/components/modalsComp/page3'), {
    ssr: false
})

const Page4 = dynamic(() => import('@/app/components/modalsComp/page4'), {
    ssr: false
})

const Page5 = dynamic(() => import('@/app/components/modalsComp/page5'), {
    ssr: false
})

const Page6 = dynamic(() => import('@/app/components/modalsComp/page6'), {
    ssr: false
})

const Page7 = dynamic(() => import('@/app/components/modalsComp/page7'), {
    ssr: false
})

const Page8 = dynamic(() => import('@/app/components/modalsComp/page8'), {
    ssr: false
})





// modalDatas.slice(0, 6) : []

export default function ModalPage() {

    
    const modalPageIndex = useSelector((state: RootState) => state.modalReducer.modalPageIndex)


  


    return (

        <div className="min-h-[100vh] bg-[#4d4e6c] overflow-hidden  flex justify-center items-center flex-col">
            {
                modalPageIndex === 0 && <Page1 />
            }
            {
                modalPageIndex === 1 && <Page2 />
            }
            {
                modalPageIndex === 2 && <Page3 />
            }
            {
                modalPageIndex === 3 && <Page4 />
            }
            {
                modalPageIndex === 4 && <Page5 />
            }
            {
                modalPageIndex === 5 && <Page6 />
            }
            {
                modalPageIndex === 6 && <Page7 />
            }
            {
                modalPageIndex === 7 && <Page8 />
            }
        </div>

    );
}
