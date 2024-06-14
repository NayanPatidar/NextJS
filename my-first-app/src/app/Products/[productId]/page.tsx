const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return <>This are the product details : {params.productId}</>;
};

export default ProductDetails;
