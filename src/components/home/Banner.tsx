import { CarouselComponent } from './CarouselComponent';
import LeftBanner from './LeftBanner';

const Banner = () => {
  return (
    <div className='flex justify-between'>
      <div className='w-[20%]'>
        <LeftBanner />
      </div>
      <div className='w-[80%]'>
        <CarouselComponent />
      </div>
    </div>
  );
};

export default Banner;
