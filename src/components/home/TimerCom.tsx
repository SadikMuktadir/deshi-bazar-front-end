'use client';

import { useEffect, useState } from 'react';

const TimerCom = () => {
  const [timeLeft, setTimeLeft] = useState(2 * 24 * 60 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className='flex gap-5'>
      <div className='outline-solid px-4 py-1 h-[70px] w-[70px]'>
        <div>
          <p className='text-[12px]'>Days</p>
        </div>
        <div className='flex justify-center'>
          <span className='text-[32px] font-bold text-[#db4444]'>0{days}</span>
        </div>
      </div>
      <div className='outline-solid px-4 py-1 h-[70px] w-[70px]'>
        <div>
          <p className='text-[12px]'>Hours</p>
        </div>
        <div className='flex justify-center'>
          <span className='text-[32px] font-bold text-[#db4444]'>{hours}</span>
        </div>
      </div>
      <div className='outline-solid px-4 py-1 h-[70px] w-[70px]'>
        <div>
          <p className='text-[12px]'>Minutes</p>
        </div>
        <div className='flex justify-center'>
          <span className='text-[32px] font-bold text-[#db4444]'>
            {minutes}
          </span>
        </div>
      </div>
      <div className='outline-solid px-4 py-1 h-[70px] w-[70px]'>
        <div>
          <p className='text-[12px]'>Seconds</p>
        </div>
        <div className='flex justify-center'>
          <span className='text-[32px] font-bold text-[#db4444]'>
            {seconds}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimerCom;
