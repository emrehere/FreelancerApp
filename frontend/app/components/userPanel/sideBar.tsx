import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-[#18202b] text-white  h-full w-64 fixed top-0 left-0 
    overflow-y-auto font-semibold">
      <div className='mt-[8rem]'>
        <ul className="mt-6">
          <li className="px-6 py-4 hover:bg-blue-50 hover:text-[#18202b]">
            <Link href="/siparislerim">
              Siparişlerim
            </Link>
          </li>
          <li className="px-6 py-4 hover:bg-blue-50 hover:text-[#18202b]">
            <Link href="/ozel-alici-isteklerim">
              Taleplerim
            </Link>
          </li>
          <li className="px-6 py-4 hover:bg-blue-50 hover:text-[#18202b]">
            <Link href="/yeni">
              Bildirimlerim
            </Link>
          </li>
          <li className="px-6 py-4 hover:bg-blue-50 hover:text-[#18202b]">
            <Link href="/bakiyem">
              Mesajlarim
            </Link>
          </li>
          <li className="px-6 py-4 bg-orange-500 hover:bg-orange-600">
            <Link href="/freelancer">
              FREELANCER OL !
            </Link>
          </li>
        </ul>
      
      </div>
    </div>
  );
};

export default Sidebar;
