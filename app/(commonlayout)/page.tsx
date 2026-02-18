import Banner from '@/src/components/home/Banner';
import BestSelling from '@/src/components/home/BestSelling';
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
      <div className='mt-[150px]'>
        <BestSelling></BestSelling>
      </div>
    </div>
  );
};

export default Home;
