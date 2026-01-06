import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';

const LeftBanner = () => {
  return (
    <div className='flex flex-col gap-2 w-60'>
      <NativeSelect className='w-[200px]'>
        <NativeSelectOption value=''>Woman’s Fashion</NativeSelectOption>
        <NativeSelectOption value='todo'>Todo</NativeSelectOption>
      </NativeSelect>
      <NativeSelect className='w-[200px]'>
        <NativeSelectOption value=''>Men’s Fashion</NativeSelectOption>
        <NativeSelectOption value='todo'>Todo</NativeSelectOption>
      </NativeSelect>
      <NativeSelect className='w-[200px]'>
        <NativeSelectOption value=''>Electronics</NativeSelectOption>
        <NativeSelectOption value='todo'>Todo</NativeSelectOption>
      </NativeSelect>
      <NativeSelect className='w-[200px]'>
        <NativeSelectOption value=''>Home & Lifestyle</NativeSelectOption>
        <NativeSelectOption value='todo'>Todo</NativeSelectOption>
      </NativeSelect>
      <NativeSelect className='w-[200px]'>
        <NativeSelectOption value=''>Medicine</NativeSelectOption>
        <NativeSelectOption value='todo'>Todo</NativeSelectOption>
      </NativeSelect>
      <NativeSelect className='w-[200px]'>
        <NativeSelectOption value=''>Sports & Outdoor</NativeSelectOption>
        <NativeSelectOption value='todo'>Todo</NativeSelectOption>
      </NativeSelect>
      <NativeSelect className='w-[200px]'>
        <NativeSelectOption value=''>Sports & Outdoor</NativeSelectOption>
        <NativeSelectOption value='todo'>Todo</NativeSelectOption>
      </NativeSelect>
      <NativeSelect className='w-[200px]'>
        <NativeSelectOption value=''>Baby’s & Toys</NativeSelectOption>
        <NativeSelectOption value='todo'>Todo</NativeSelectOption>
      </NativeSelect>
      <NativeSelect className='w-[200px]'>
        <NativeSelectOption value=''>Groceries & Pets</NativeSelectOption>
        <NativeSelectOption value='todo'>Todo</NativeSelectOption>
      </NativeSelect>
      <NativeSelect className='w-[200px]'>
        <NativeSelectOption value=''>Health & Beauty</NativeSelectOption>
        <NativeSelectOption value='todo'>Todo</NativeSelectOption>
      </NativeSelect>
    </div>
  );
};

export default LeftBanner;
