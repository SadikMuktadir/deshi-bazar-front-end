import { Button } from '@/components/ui/button';
import Link from 'next/link';

const notFound = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div>
        <p className='text-[110px]'>404 Not Found</p>
      </div>
      <div>
        <p className='text-[16px] mt-[40px]'>
          Your visited page not found. You may go home page.
        </p>
      </div>
      <div className='mt-[60px]'>
        <Link href='/'>
          <Button
            className='cursor-pointer
    rounded-none
    bg-[#db4444]
    text-white
    border border-transparent
    hover:bg-white
    hover:text-black
    hover:border-[#db4444]
    transition-colors'
          >
            Back to Home Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default notFound;
