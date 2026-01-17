/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { getAllProducts } from '@/src/services/products';
import { IProduct } from '@/src/types';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const HomeFlashSale = () => {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllProducts();
        setProduct(data);
      } catch (error) {
        console.error('Failed to load furniture', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className='flex justify-center items-center h-40'>
        <Spinner className='text-[#db4444]' />
      </div>
    );
  if (product.length === 0)
    return <p className='text-center'>No Product found.</p>;

  return (
    <div className='relative w-full'>
      <Carousel opts={{ align: 'start' }} className='w-full'>
        <CarouselContent>
          {product.map((item) => (
            <CarouselItem key={item._id} className='md:basis-1/2 lg:basis-1/4'>
              <Card className='h-full'>
                <CardContent className='p-4 flex flex-col justify-between h-full'>
                  <div className='mb-4 flex h-[250px] w-full items-center justify-center rounded-md bg-[#f5f5f5]'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='h-[200px] w-auto object-contain'
                    />
                  </div>

                  <div>
                    <p className='mt-2 line-clamp-2 text-[16px] font-medium'>
                      {item.name}
                    </p>
                    <p className='mt-2 text-[#db4444] font-semibold'>
                      ${item.price}
                    </p>
                    <p className='mt-2 text-[#ffad33]'>⭐ {item.rating}</p>
                  </div>

                  <Button className='mt-2 w-full bg-black text-white'>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='absolute -top-14 right-0 flex gap-2'>
          <CarouselPrevious className='static h-10 w-10 rounded-full border bg-[#f5f5f5] shadow cursor-pointer' />
          <CarouselNext className='static h-10 w-10 rounded-full border bg-[#f5f5f5] shadow cursor-pointer' />
        </div>
      </Carousel>
      <div className='flex justify-center mt-10'>
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
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default HomeFlashSale;
