const Review = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <h2>
      Review Id : {params.reviewId} for the Product : {params.productId}
    </h2>
  );
};

export default Review