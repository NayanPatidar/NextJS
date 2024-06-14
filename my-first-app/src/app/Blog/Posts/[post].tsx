const PostPage = ({ params }: { params: { Posts: string } }) => {
  return (
    <>
      <h1>My Post Id : {params.Posts}</h1>
    </>
  );
};

export default PostPage;
