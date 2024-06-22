import VideoPlayer from "@/components/videoplayer";

const Home = () => {
  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <div>
      <h1>My Video Player</h1>
      <VideoPlayer options={videoJsOptions} />
    </div>
  );
};

export default Home;
