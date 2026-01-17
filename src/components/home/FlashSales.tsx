// import TimerCom from './TimerCom';

import HomeFlashSale from '../card/HomeFlashSale';

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
    </div>
  );
};

export default FlashSales;
