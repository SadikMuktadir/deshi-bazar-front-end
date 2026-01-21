/* eslint-disable @next/next/no-img-element */
import phoneImg from '../../../public/image/category-cell-phone@3x.png';
import cameraImg from '../../../public/image/category-camera@3x.png';
import computerImg from '../../../public/image/category-computer@3x.png';
import gamepadImg from '../../../public/image/category-gamepad@3x.png';
import headphoneImg from '../../../public/image/category-headphone@3x.png';
import smartwatchImg from '../../../public/image/category-smart-watch@3x.png';

const BrowseByCategory = () => {
  return (
    <div>
      <div className='mr-20 mb-10'>
        <p className='text-[36px] font-bold'>Browse By Category</p>
      </div>
      <div className='flex mx-5 justify-between'>
        <div
          className='group h-[200px] w-[170px] flex flex-col justify-center items-center p-5
             outline outline-1 rounded-lg
             transition-all duration-300
             hover:bg-[#db4444] cursor-pointer'
        >
          <img
            src={phoneImg.src}
            alt='Phones'
            className='transition-all duration-300
               group-hover:brightness-0 group-hover:invert'
          />

          <p className='mt-4 text-[16px] transition-colors duration-300 group-hover:text-white'>
            Phones
          </p>
        </div>

        <div
          className='group h-[200px] w-[170px] flex flex-col justify-center items-center p-5
                outline outline-1 rounded-lg
                transition-all duration-300
                hover:bg-[#db4444] cursor-pointer'
        >
          <div>
            <img
              src={computerImg.src}
              alt=''
              className='transition-all duration-300
               group-hover:brightness-0 group-hover:invert'
            />
          </div>
          <div className='mt-4'>
            <p className='text-[16px] transition-colors duration-300 group-hover:text-white'>
              Computers
            </p>
          </div>
        </div>
        <div
          className='group h-[200px] w-[170px] flex flex-col justify-center items-center p-5
                outline outline-1 rounded-lg
                transition-all duration-300
                hover:bg-[#db4444] cursor-pointer'
        >
          <div>
            <img
              src={smartwatchImg.src}
              alt=''
              className='transition-all duration-300
               group-hover:brightness-0 group-hover:invert'
            />
          </div>
          <div className='mt-4'>
            <p className='text-[16px] transition-colors duration-300 group-hover:text-white'>
              SmartWatch
            </p>
          </div>
        </div>
        <div
          className='group h-[200px] w-[170px] flex flex-col justify-center items-center p-5
                outline outline-1 rounded-lg
                transition-all duration-300
                hover:bg-[#db4444] cursor-pointer'
        >
          <div>
            <img
              src={cameraImg.src}
              alt=''
              className='transition-all duration-300
               group-hover:brightness-0 group-hover:invert'
            />
          </div>
          <div className='mt-4'>
            <p className='text-[16px] transition-colors duration-300 group-hover:text-white'>
              Camera
            </p>
          </div>
        </div>
        <div
          className='group h-[200px] w-[170px] flex flex-col justify-center items-center p-5
                outline outline-1 rounded-lg
                transition-all duration-300
                hover:bg-[#db4444] cursor-pointer'
        >
          <div>
            <img
              src={headphoneImg.src}
              alt=''
              className='transition-all duration-300
               group-hover:brightness-0 group-hover:invert'
            />
          </div>
          <div className='mt-4'>
            <p className='text-[16px] transition-colors duration-300 group-hover:text-white'>
              HeadPhones
            </p>
          </div>
        </div>
        <div
          className='group h-[200px] w-[170px] flex flex-col justify-center items-center p-5
                outline outline-1 rounded-lg
                transition-all duration-300
                hover:bg-[#db4444] cursor-pointer'
        >
          <div>
            <img
              src={gamepadImg.src}
              alt=''
              className='transition-all duration-300
               group-hover:brightness-0 group-hover:invert'
            />
          </div>
          <div className='mt-4'>
            <p className='text-[16px] transition-colors duration-300 group-hover:text-white'>
              Gaming
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategory;
