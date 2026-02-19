/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import { Rating } from '@/components/ui/Rating';
import { IProduct } from '@/src/types';

const Details = ({ product }: { product: IProduct }) => {
  return (
    <div className='flex justify-around'>
      <div>
        <img
          src={product?.image}
          alt={product?.name}
          className='w-[500px] h-[600px] object-contain'
        />
      </div>
      <div className='flex flex-col justify-center'>
        <div>
          <p className='text-[24px] font-semibold'>{product?.name}</p>
        </div>
        <div className='mt-2 flex'>
          <div className='mr-2'>
            <Rating value={product?.rating}></Rating>
          </div>
          <div className='mr-2'>
            <p>(150 Reviews)</p>
          </div>
          <div>
            <p className='text-[#00ff66]'>In Stock</p>
          </div>
        </div>
        <div className='mt-2'>
          <p className='text-[24px]'>${product?.price}</p>
        </div>
        <div className='mt-2 mb-8'>
          <p className='text-[14px]'>${product?.name}</p>
        </div>
        <hr />
        <div className='mt-4'>
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
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
