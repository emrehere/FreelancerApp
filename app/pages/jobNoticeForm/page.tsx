"use client"
import Page1 from "@/app/components/modalsComp/page1"
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store/RootReducer';
import Page2 from "@/app/components/modalsComp/page2";
import Page3 from "@/app/components/modalsComp/page3";
import Page4 from "@/app/components/modalsComp/page4";
import Page5 from "@/app/components/modalsComp/page5";
import Page6 from "@/app/components/modalsComp/page6";





// modalDatas.slice(0, 6) : []

export default function ModalPage() {

    
    const modalIndex = useSelector((state: RootState) => state.modalReducer.modalIndex)


    console.log(modalIndex)


    return (

        <div className="min-h-[100vh] bg-[#4d4e6c] overflow-hidden  flex justify-center items-center flex-col">
            {
                modalIndex === 0 && <Page1 />
            }
            {
                modalIndex === 1 && <Page2 />
            }
            {
                modalIndex === 2 && <Page3 />
            }
            {
                modalIndex === 3 && <Page4 />
            }
            {
                modalIndex === 4 && <Page5 />
            }
            {
                modalIndex === 5 && <Page6 />
            }
        </div>

    );
}
