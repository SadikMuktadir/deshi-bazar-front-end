// import TimerCom from './TimerCom';

import { Button } from '@/components/ui/button';
import HomeFlashSale from '../card/HomeFlashSale';
import Link from 'next/link';

const FlashSales = () => {
  return (
    <div>
      <div className='flex'>
        <div className='mr-20'>
          <p className='text-[36px] font-bold'>Flash Sales</p>
        </div>
        {/* <div>
          <TimerCom></TimerCom>
        </div> */}
      </div>
      <div>
        <HomeFlashSale></HomeFlashSale>
      </div>
      <div className='flex justify-center mt-10'>
        <Link href='/products'>
          <Button
            className='cursor-pointer
    rounded-none
    bg-[#db4444]
    text-white
    border border-transparent
    hover:bg-white
    hover:text-black
    hover:border-[#db4444]
    transition-colors'
          >
            View All Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FlashSales;
