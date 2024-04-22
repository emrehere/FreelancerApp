import React from 'react'
import { AiOutlineWechat } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';
import { openChatBoxSetter, openIndividualChatSetter } from '@/app/components/messageBottomSection/BottomMessageReducer';
import OpennedChatList from './OpennedChatList';
import IndividualChat from './IndividualChat';

function PopUpMessageClick() {

    const dispatch = useDispatch();

    const openChatBox = useSelector((state: RootState) => state.BottomMessageReducer.openChatBox);
    const openIndividualChat = useSelector((state: RootState) => state.BottomMessageReducer.openIndividualChat);
   
    const toggleChatBox = () => {
        dispatch(openChatBoxSetter(!openChatBox));
    }

  return (
    <div className='flex'>
    <div className='fixed bottom-0 right-52 '>
      <div className='flex justify-end '>
      {
        openIndividualChat && <IndividualChat />
      }
     
      </div>
    </div>
    <div className='fixed bottom-0 right-0'>
        {
            openChatBox && <OpennedChatList />
        }
        <div onClick={toggleChatBox} className={ ` flex items-center justify-center space-x-2 bg-orange-500 
        text-blue-50 w-52 py-2  ${ openIndividualChat ? "" : "rounded-bl-xl"}
         ${ openChatBox ? "" : "rounded-tl-xl" } ` }>
        <p className='text-lg font-semibold tracking-widest'>Chat</p>
        <AiOutlineWechat size={30} />
        </div>
        
    </div>
          
    </div>
  )
}

export default PopUpMessageClick
