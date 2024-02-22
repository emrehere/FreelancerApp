import React, { useState, ChangeEvent } from 'react';
import NextButton from "@/app/components/modalsComp/NextButton";
import ModalTopElement from './ModalTopElement';



function Page7() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const formatPhoneNumber = (input: string) => {
    const formattedNumber = input.replace(/\D/g, '');
    const updatedNumber = formattedNumber.replace(/(\d{1,3})(\d{0,3})(\d{0,2})(\d{0,2})/, function(match, p1, p2, p3, p4) {
      let result = '';
      if (p1) result += p1;
      if (p2) result += '-' + p2;
      if (p3) result += '-' + p3;
      if (p4) result += '-' + p4;
      return result;
    });
    setPhoneNumber(updatedNumber);
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    formatPhoneNumber(e.target.value);
  };

  return (
    <div>
      <ModalTopElement />
      <div className="bg-white overflow-hidden w-[70vw] h-[55vh] min-h-[12rem] rounded-2xl flex flex-col items-center justify-center">
        <div className='flex justify-center  h-full flex-col items-center w-[60vw]'>
        <h1 className=' font-semibold text-[#1a1c28] text-2xl -mt-8'>Cep telefonun?</h1>
        <p className='text-gray-500 text-md  mt-2'>Hizmet verenimiz seninle bu numaradan iletişime geçecek</p>
        <input
          className='mt-8 w-[50vw] border-[#1a1c28] border-2 border-opacity-20 outline-none p-2'
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="555-555-55-55"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        </div>
        <div className="flex flex-grow"></div>
        <NextButton />
      </div>
    </div>
  );
}

export default Page7;
