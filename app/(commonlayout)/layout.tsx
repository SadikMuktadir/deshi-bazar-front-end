import Footer from '@/src/components/shared/Footer';
import Navbar from '@/src/components/shared/Navbar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
