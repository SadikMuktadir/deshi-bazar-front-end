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
        <div className='outline-solid h-[200px] w-[170px] flex flex-col justify-center items-center p-5'>
          <div>
            <img src={phoneImg.src} alt='' />
          </div>
          <div className='mt-4'>
            <p className='text-[16px]'>Phones</p>
          </div>
        </div>
        <div className='outline-solid h-[200px] w-[170px] flex flex-col justify-center items-center p-5'>
          <div>
            <img src={computerImg.src} alt='' />
          </div>
          <div className='mt-4'>
            <p className='text-[16px]'>Computers</p>
          </div>
        </div>
        <div className='outline-solid h-[200px] w-[170px] flex flex-col justify-center items-center p-5'>
          <div>
            <img src={smartwatchImg.src} alt='' />
          </div>
          <div className='mt-4'>
            <p className='text-[16px]'>SmartWatch</p>
          </div>
        </div>
        <div className='outline-solid h-[200px] w-[170px] flex flex-col justify-center items-center p-5'>
          <div>
            <img src={cameraImg.src} alt='' />
          </div>
          <div className='mt-4'>
            <p className='text-[16px]'>Camera</p>
          </div>
        </div>
        <div className='outline-solid h-[200px] w-[170px] flex flex-col justify-center items-center p-5'>
          <div>
            <img src={headphoneImg.src} alt='' />
          </div>
          <div className='mt-4'>
            <p className='text-[16px]'>HeadPhones</p>
          </div>
        </div>
        <div className='outline-solid h-[200px] w-[170px] flex flex-col justify-center items-center p-5'>
          <div>
            <img src={gamepadImg.src} alt='' />
          </div>
          <div className='mt-4'>
            <p className='text-[16px]'>Gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByCategory;
