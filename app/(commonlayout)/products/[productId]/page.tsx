/* eslint-disable @typescript-eslint/no-unused-vars */
import { getSingleProducts } from "@/src/services/products";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {

    const {productId} = await params
    const {data:product} = await getSingleProducts(productId)

  return <div>{(await params).productId}</div>;
};

export default ProductDetails;
