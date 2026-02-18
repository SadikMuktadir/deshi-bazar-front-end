/* eslint-disable @next/next/no-img-element */
import playstation from '../../../public/image/playstation.png';

const NewArrival = () => {
  return (
    <div>
      <div className='mr-20 mb-10'>
        <p className='text-[36px] font-bold'>New Arrival</p>
      </div>
      <div>
        <div>
          <div className='h-[600px] w-[500px] bg-[#000000]'>
            <img className='h-[500px] w-[500px]' src={playstation.src} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
