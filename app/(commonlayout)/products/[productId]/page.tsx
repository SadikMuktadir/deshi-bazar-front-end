import Details from '@/src/components/product/Details';
import { getSingleProducts } from '@/src/services/products';

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const product = await getSingleProducts(productId);

  return (
    <div>
      <Details product={product}></Details>
    </div>
  );
};

export default ProductDetails;
