import Banner from '@/src/components/home/Banner';
import BrowseByCategory from '@/src/components/home/BrowseByCategory';
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
      <div className='mt-[150px]'>
        <BrowseByCategory></BrowseByCategory>
      </div>
    </div>
  );
};

export default Home;
