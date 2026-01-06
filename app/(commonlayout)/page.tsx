import Banner from '@/src/components/home/Banner';
import FlashSales from '@/src/components/home/FlashSales';

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className='mt-[150px]'>
        <FlashSales></FlashSales>
      </div>
    </div>
  );
};

export default Home;
