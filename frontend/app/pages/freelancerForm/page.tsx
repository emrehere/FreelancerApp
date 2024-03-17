"use client"
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store/RootReducer';
import dynamic from "next/dynamic";

const Page1 = dynamic(() => import('@/app/components/modalsComp/page1'), {
    ssr: false
})

const Page2 = dynamic(() => import('@/app/components/freelancerModals/Page2'), {
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




export default function ModalPage() {

    
    const modalPageIndex = useSelector((state: RootState) => state.modalReducer.modalPageIndex)


  


    return (

        <div className="min-h-[100vh] bg-[#4d4e6c] overflow-hidden  flex justify-center items-center flex-col">
            {
                modalPageIndex === 0 && <Page1 forFreelancer={true} />
            }
            {
                modalPageIndex === 1 && <Page2 />
            }
            {
                modalPageIndex === 2 && <Page3 forFreelancer={true} />
            }
            {
                modalPageIndex === 3 && <Page4 />
            }
            {
                modalPageIndex === 4 && <Page5 />
            }
       
        </div>

    );
}
