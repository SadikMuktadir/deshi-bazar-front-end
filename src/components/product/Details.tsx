/* eslint-disable @next/next/no-img-element */
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
      <div>
        <div className=''>
          <p className='text-[24px] font-semibold'>{product?.name}</p>
        </div>
        <div className='mt-2'>
          <Rating value={product?.rating}></Rating>
        </div>
        <div className='mt-2'>
          <p className='text-[24px]'>${product?.price}</p>
        </div>
        <div className='mt-2'>
          <p className='text-[14px]'>${product?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
