import React, { useEffect } from 'react'
import { AiOutlineWechat } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store/RootReducer';
import { openChatBoxSetter,  messageArraySetter } from '@/app/components/messageBottomSection/BottomMessageReducer';
import OpennedChatList from './OpennedChatList';
import IndividualChat from './IndividualChat';

function PopUpMessageClick() {

  const dispatch = useDispatch();

  const openChatBox = useSelector((state: RootState) => state.BottomMessageReducer.openChatBox);
  const messageArrayFromRedux = useSelector((state: RootState) => state.BottomMessageReducer.messageStates);

  // 1. Filter the array to get only those with chatStart set to true
  const filteredMessageArrayByChatStart = messageArrayFromRedux.filter(
    (item) => item.chatStart === true
  );

  // 2. Sort the filtered array in descending order based on dateStart
  const sortedByDateStart = filteredMessageArrayByChatStart.sort(
    (a, b) => Number(b.dateStart) - Number(a.dateStart)
  );

  // 3. Get the latest three message boxes
  const latestThreeMessageBoxes = sortedByDateStart.slice(0, 3);

  // 4. Do something with the fourth message box
  function doSomethingWithFourthMessageBox() {
    // Do something with the fourth message box
    const fourthMessageBox = sortedByDateStart[3];
    const messageArrayUpdate = messageArrayFromRedux.map((item) => {
        if(item.dateStart === fourthMessageBox.dateStart){
            return {...item, chatStart: false, dateStart: "", chatName: ""}
        }
        return item
    })
    dispatch(messageArraySetter(messageArrayUpdate))
  }

  useEffect(() => {
    if(sortedByDateStart.length === 4){
        doSomethingWithFourthMessageBox()
    }
  }, [sortedByDateStart])

  // Now you can use latestThreeMessageBoxes to access the data for the latest three opened chat boxes
  console.log("Latest three message boxes:", latestThreeMessageBoxes);


  const toggleChatBox = () => {
    dispatch(openChatBoxSetter(!openChatBox));

  }

  return (
    <div className='flex'>
      <div className='fixed bottom-0 right-52 '>
        <div className='flex justify-end '>
        {
             latestThreeMessageBoxes.sort((a, b) => Number(a.dateStart) - Number(b.dateStart))
            .map((item) => {
                return (
                  <div >
                      <IndividualChat item = {item} />
                  </div>
                    
                )
            })
        }    

        </div>
      </div>
      <div className='fixed bottom-0 right-0'>
        {
          openChatBox && <OpennedChatList />
        }
        <div onClick={toggleChatBox} className={` flex items-center justify-center space-x-2 bg-orange-500 
        text-blue-50 w-52 py-2  ${filteredMessageArrayByChatStart.length === 0 ? "rounded-bl-xl" : ""} }
         ${openChatBox ? "" : "rounded-tl-xl"} `}>
          <p className='text-lg font-semibold tracking-widest'>Chat</p>
          <AiOutlineWechat size={30} />
        </div>

      </div>

    </div>
  )
}

export default PopUpMessageClick
