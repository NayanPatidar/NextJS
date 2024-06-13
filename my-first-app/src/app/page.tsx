import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Link href={`/Books`}>Link On Link to Navigate to Books</Link>
    </>
  );
};

export default Home;
