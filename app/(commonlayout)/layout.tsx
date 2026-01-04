import Footer from '@/src/components/shared/Footer';
import Navbar from '@/src/components/shared/Navbar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='mx-5'>
        <Navbar></Navbar>
      </div>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
