import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

const CheckboxDemo = ({NamedByParent}: {NamedByParent: string}) => (
  <form>
    <div className="flex items-center">
      <Checkbox.Root
        className="shadow-blackA4 hover:bg-violet3 flex h-[20px] w-[20px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
        defaultChecked
        id="c1"
      >
        <Checkbox.Indicator className="text-violet11">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="pl-[8px] text-[14px] leading-none " htmlFor="c1">
      {NamedByParent}
      </label>
    </div>
  </form>
);

export default CheckboxDemo;