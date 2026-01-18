'use server';

export const getAllProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/all-product`, {
      next: {
        tags: ['PRODUCT'],
      },
    });

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSingleProducts = async (productId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/all-product/${productId}`,
      {
        next: {
          tags: ['PRODUCT'],
        },
      },
    );

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
